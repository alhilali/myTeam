import { Component } from '@angular/core';
import { IonicPage, NavController,
   NavParams, ModalController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { EditProfilePage } from '../edit-profile/edit-profile'
/**
 * Generated class for the PlayerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-player',
  templateUrl: 'player.html',
})
export class PlayerPage {
  player: any
  currentUser: boolean = false

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private afAuth: AngularFireAuth,
     private modlCtrl: ModalController) {
    this.player = this.navParams.get('player');
    if(this.player.$key == afAuth.auth.currentUser.uid) this.currentUser = true;
  }

  openModal() {
    let modal = this.modlCtrl.create(EditProfilePage, {player: this.player});
    modal.present();
  }

}
