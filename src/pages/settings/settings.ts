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
  playerUID: string

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private afAuth: AngularFireAuth) {
    this.playerUID = navParams.get('id');
  }

  editProfile() {
    this.navCtrl.push('EditProfilePage', { id: this.playerUID });
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
