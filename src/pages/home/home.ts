import { Component } from '@angular/core';
import { IonicPage, NavController, ActionSheetController, ModalController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { MyTeamDB } from '../../helpers/myTeamDB';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  currentUser: any = {}
  currentUserId: any
  posts: any[]
  blur: boolean = false;
  constructor(private afAuth: AngularFireAuth, private modal: ModalController,
    private teamDB: MyTeamDB, private actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController) {
      this.currentUserId = this.afAuth.auth.currentUser.uid;
  }

  ionViewDidLoad () {
    this.teamDB.getUserInfo(this.afAuth.auth.currentUser.uid)
    .then(user => {
      this.currentUser = user;
    })
    this.loadPosts();
  }

  loadPosts() {
    let result;
    this.teamDB.getPosts().then(data=>{
      result = data;
      this.posts = result;
      this.posts.reverse();
    })
  }

  doRefresh(refresher) {
    this.loadPosts();
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
    myModal.onWillDismiss(()=>{
      this.blur = false;
    })
  }

}
