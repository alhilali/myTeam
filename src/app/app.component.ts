import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireAuth } from 'angularfire2/auth';

import { WelcomePage } from '../pages/welcome/welcome';
import { TabsPage } from '../pages/tabs/tabs';

import { Keyboard } from '@ionic-native/keyboard';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(private afAuth: AngularFireAuth,
    platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
     private keyboard: Keyboard) {
    afAuth.auth.onAuthStateChanged(user => {
      this.rootPage = user ? TabsPage : WelcomePage;
    })
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      if (this.keyboard) {
        this.keyboard.hideKeyboardAccessoryBar(false);
      }
      statusBar.styleDefault();
      setTimeout(() => {
        splashScreen.hide();
      }, 650);
      //splashScreen.hide();
    });
  }
}
