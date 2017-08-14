import { Keyboard } from "@ionic-native/keyboard";
import { Component, ViewChild } from '@angular/core';
import {
  IonicPage, NavController, ActionSheetController,
  ModalController, Slides, Events, Platform, ToastController
} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { MyTeamDB } from '../../helpers/myTeamDB';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  currentUserId: any
  allPosts: any[]
  matchPosts: any[]
  playerPosts: any[]
  blur: boolean = false;
  type: string = 'all';
  currentUser: any = {}
  constructor(private platform: Platform, private modal: ModalController,
    public teamDB: MyTeamDB, private actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController, public events: Events, public push: Push,
    public toast: ToastController, private keyboard: Keyboard) {
    events.subscribe("post:deleted", (postID) => {
      this.deletePost(postID)
    });

    if (this.keyboard) {
      this.keyboard.hideKeyboardAccessoryBar(true);
    }

    this.initPushNotification();
  }

  initPushNotification() {
    if (!this.platform.is('cordova')) {
      console.warn("Push notifications not initialized. Cordova is not available - Run in physical device");
      return;
    }
    const options: PushOptions = {
      android: {
        senderID: '1091890097761'
      },
      ios: {
        alert: 'true',
        badge: true,
        sound: 'true',
        clearBadge: true
      },
      windows: {}
    };

    const pushObject: PushObject = this.push.init(options);

    pushObject.on('registration').subscribe((registration: any) => {
      console.log('Device registered');
      this.teamDB.saveToken(registration.registrationId)
    })

    pushObject.on('notification').subscribe((notification) => {
      console.log('message', notification.message);
      let self = this;
      //if user using app and push notification comes
      if (notification.additionalData.foreground) {
        // if application open, show popup
        this.toast.create({
          message: notification.title + ': ' + notification.message,
          duration: 2200,
          position: 'top',
          dismissOnPageChange: true
        }).present();
        console.log(notification);
      } else {
        console.log(notification);
        //if user NOT using app and push notification comes
        this.navCtrl.push('NotificationPage')
        console.log("Push notification clicked");
      }
    });
    pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
  }

  ngAfterViewInit() {
    this.slides.autoHeight = true;
  }

  async ionViewWillEnter() {
    await this.teamDB.getLoggedInUser().then(data => {
      this.currentUserId = data;
    })
    await this.teamDB.getUserInfo(this.currentUserId).then(data => {
      this.currentUser = data;
    })
  }

  segmentChanged(event) {
    if (event.value == 'all') this.slides.slideTo(0, 500);
    else if (event.value == 'match') this.slides.slideTo(1, 500);
    else if (event.value == 'player') this.slides.slideTo(2, 500);
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    if (currentIndex == 0) this.type = 'all';
    if (currentIndex == 1) this.type = 'match';
    if (currentIndex == 2) this.type = 'player';
  }

  ionViewWillLoad() {
    this.loadPosts('all');
    this.loadPosts('match');
    this.loadPosts('player');
  }

  loadPosts(type) {
    let result;
    if (type == 'all') {
      this.teamDB.getAllPosts().then(data => {
        result = data;
        this.allPosts = result;
        this.allPosts.reverse();
      })
    } else if (type == 'match') {
      this.teamDB.getPosts(type).then(data => {
        result = data;
        this.matchPosts = result;
        this.matchPosts.reverse();
      })
    } else if (type == 'player') {
      this.teamDB.getPosts(type).then(data => {
        result = data;
        this.playerPosts = result;
        this.playerPosts.reverse();
      })
    }
  }

  deletePost(postID) {
    const postIndex = this.allPosts.map(e => { return e.$key }).indexOf(postID);
    this.allPosts.splice(postIndex, 1)
    if (this.type == 'match') {
      const postIndex = this.matchPosts.map(e => { return e.$key }).indexOf(postID);
      this.matchPosts.splice(postIndex, 1)
    } else if (this.type == 'player') {
      const postIndex = this.playerPosts.map(e => { return e.$key }).indexOf(postID);
      this.playerPosts.splice(postIndex, 1)
    }
  }

  doRefresh(refresher) {
    this.loadPosts(this.type);
    setTimeout(() => {
      //console.log('Async operation has ended');
      refresher.complete();
    }, 1000);
  }

  openModal() {
    this.navCtrl.push('PlayerPage', { id: this.currentUserId });
  }

  compose() {
    const myModal = this.modal.create('ComposePage', { player: this.currentUser })
    myModal.present();
    //this.blur = true;
    myModal.onWillDismiss(data => {
      //this.blur = false;
      if (data.postDone) {
        this.loadPosts('all');
        this.loadPosts('match');
        this.loadPosts('player');
      }
    })
  }

  loginPage() {
    this.navCtrl.push('WelcomePage')
  }

}
