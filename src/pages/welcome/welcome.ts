import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";
import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';

import { TwitterConnect } from '@ionic-native/twitter-connect';
import * as firebase from 'firebase/app';
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
  constructor(public navCtrl: NavController,
    private afAuth: AngularFireAuth,
    private twitter: TwitterConnect,
    private db: AngularFireDatabase,
    private loadingCtrl: LoadingController) {
    this.navCtrl.swipeBackEnabled = false;
  }

  loginPage() {
    this.navCtrl.push('LoginPage')
  }

  registerPage() {
    this.navCtrl.push('RegisterPage');
  }

  twitterLogin() {
    let loginLoading = this.loadingCtrl.create({
      dismissOnPageChange: true,
      spinner: 'crescent'
    })
    loginLoading.present();
    this.twitter.login().then(response => {
      const twitterCredential = firebase.auth.TwitterAuthProvider
        .credential(response.token, response.secret);
      console.log(response);
      this.afAuth.auth.signInWithCredential(twitterCredential)
        .then(userProfile => {
          // check if user info exists in DB
          const userInfo = this.db.object('/users/' + userProfile.uid);
          userInfo.take(1).subscribe(data => {
            if (!data.username) {
              let imageURL = userProfile.photoURL;
              if (imageURL) imageURL = imageURL.substring(0, imageURL.length - 11) + '.jpg';
              userInfo.set({
                name: userProfile.displayName,
                position: 'GK',
                profilePic: imageURL ? imageURL : 'http://www.gscadvisory.com/wp-content/uploads/2016/04/blank.jpg',
                bg: 'http://www.publicdomainpictures.net/pictures/50000/nahled/sunset-profile-background.jpg'
              }).then(() => {
                this.navCtrl.push('ChooseUsernamePage', { user: userProfile, twitterUsername: response.userName })
              })
            } else { // User info does exists
              this.navCtrl.setRoot('TabsPage')
            }
          })
        }, error => {
          loginLoading.dismiss();
          console.log(error);
        });
    }, error => {
      loginLoading.dismiss();
      console.log("Error connecting to twitter: ", error);
    });
  }

}
