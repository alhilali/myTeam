import { AngularFireAuth } from "angularfire2/auth";
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
/**
 * Generated class for the WelcomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth) {
    afAuth.auth.onAuthStateChanged(user => {
      if (user) this.navCtrl.setRoot('TabsPage')
    })
  }

  loginPage() {
    this.navCtrl.push('LoginPage');
  }

  registerPage() {
    this.navCtrl.push('RegisterPage');
  }

}
