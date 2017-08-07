import { AngularFireAuth } from "angularfire2/auth";
import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  player: any

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private afAuth: AngularFireAuth) {
    this.player = navParams.get('player');
  }

  editProfile() {
    this.navCtrl.push('EditProfilePage', { player: this.player });
  }

  changePassword() {

  }

  contactUs() {

  }

  aboutUs() {

  }

  logOut() {
    this.navCtrl.push('WelcomePage')
    this.afAuth.auth.signOut();
  }
}
