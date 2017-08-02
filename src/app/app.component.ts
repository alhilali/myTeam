import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { Deeplinks } from 'ionic-native';
import { SplashScreen } from '@ionic-native/splash-screen';
import 'web-animations-js/web-animations.min';
import { AngularFireAuth } from 'angularfire2/auth';

import { Keyboard } from '@ionic-native/keyboard';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = 'WelcomePage';

  @ViewChild(Nav) navChild: Nav;

  constructor(private afAuth: AngularFireAuth,
    public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private keyboard: Keyboard) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      Deeplinks.route({
        '#/mytabs/tab-3/search': 'SearchPage',
        '#/mytabs/tab-0/player:username': 'PlayerPage'
      })

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

  ngAfterViewInit() {
    this.platform.ready().then(() => {
      Deeplinks.routeWithNavController(this.navChild, {
        '#/mytabs/tab-3/search': 'SearchPage',
        '#/mytabs/tab-0/player:username': 'PlayerPage'
      }).subscribe((match) => {
        console.log('Successfully routed', match);
      }, (nomatch) => {
        console.warn('Unmatched Route', nomatch);
      });
    })
  }
}
