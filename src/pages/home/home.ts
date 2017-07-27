import { Component, ViewChild } from '@angular/core';
import {
  IonicPage, NavController, ActionSheetController,
  ModalController, Content
} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { MyTeamDB } from '../../helpers/myTeamDB';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Content) content: Content;
  currentUser: any = {}
  currentUserId: any
  posts: any[]
  blur: boolean = false;
  type: string = 'all';
  constructor(private afAuth: AngularFireAuth, private modal: ModalController,
    private teamDB: MyTeamDB, private actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController) {
    this.currentUserId = this.afAuth.auth.currentUser.uid;
  }

  ionViewDidLoad() {
    this.loadUser();
    this.loadPosts('all');
  }

  loadUser() {
    this.teamDB.getUserInfo(this.afAuth.auth.currentUser.uid)
      .then(user => {
        this.currentUser = user;
      })
  }

  loadPosts(type) {
    let result;
    if (type == 'all') {
      this.teamDB.getAllPosts().then(data => {
        result = data;
        this.posts = result;
        this.posts.reverse();
      })
    } else {
      this.teamDB.getPosts(type).then(data => {
        result = data;
        this.posts = result;
        this.posts.reverse();
      })
    }
  }

  segmentChanged() {
    this.loadPosts(this.type)
  }

  doRefresh(refresher) {
    this.loadUser();
    this.loadPosts(this.type);
    setTimeout(() => {
      //console.log('Async operation has ended');
      refresher.complete();
    }, 1000);
  }

  openModal() {
    this.navCtrl.push('PlayerPage', { player: this.currentUser });
  }

  compose() {
    const myModal = this.modal.create('ComposePage', { player: this.currentUser })
    myModal.present();
    this.blur = true;
    myModal.onWillDismiss(data => {
      this.blur = false;
      if (data.postDone) this.loadPosts(this.type);
    })
  }

}
