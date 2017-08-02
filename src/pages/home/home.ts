import { Component, ViewChild } from '@angular/core';
import {
  IonicPage, NavController, ActionSheetController,
  ModalController, Slides
} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { MyTeamDB } from '../../helpers/myTeamDB';

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
  constructor(private afAuth: AngularFireAuth, private modal: ModalController,
    public teamDB: MyTeamDB, private actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController) {
    this.teamDB.getLoggedInUser().then(data => {
      this.currentUserId = data;
    })
  }

  ngAfterViewInit() {
    this.slides.autoHeight = true;
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

  doRefresh(refresher) {
    this.loadPosts(this.type);
    setTimeout(() => {
      //console.log('Async operation has ended');
      refresher.complete();
    }, 1000);
  }

  async openModal() {
    await this.teamDB.getUserInfo(this.currentUserId).then(data => {
      this.navCtrl.push('PlayerPage', { username: data.originalUsername });
    })
  }

  async compose() {
    await this.teamDB.getUserInfo(this.currentUserId).then(data => {
      const myModal = this.modal.create('ComposePage', { player: data })
      myModal.present();
      this.blur = true;
      myModal.onWillDismiss(data => {
        this.blur = false;
        if (data.postDone) this.loadPosts(this.type);
      })
    })

  }

  loginPage() {
    this.navCtrl.push('WelcomePage')
  }

}
