import { MyTeamDB } from "./../helpers/myTeamDB";
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { Deeplinks } from 'ionic-native';
import { SplashScreen } from '@ionic-native/splash-screen';
import 'web-animations-js/web-animations.min';
import { AngularFireAuth } from 'angularfire2/auth';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

import { Keyboard } from '@ionic-native/keyboard';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  @ViewChild(Nav) navChild: Nav;

  constructor(private afAuth: AngularFireAuth, private teamDB: MyTeamDB,
    public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private keyboard: Keyboard, public push: Push) {
    platform.ready().then(() => {

      this.afAuth.auth.onAuthStateChanged((user) => {
        if (user) this.rootPage = 'TabsPage'
        else this.rootPage = 'WelcomePage'
      })

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      Deeplinks.route({
        '#/mytabs/tab-3/search': 'SearchPage',
        '#/mytabs/tab-0/player:username': 'PlayerPage'
      })

      if (this.keyboard) {
        this.keyboard.hideKeyboardAccessoryBar(false);
      }
      statusBar.styleLightContent();
      setTimeout(() => {
        splashScreen.hide();
      }, 700);
      //this.initPushNotification();
      //splashScreen.hide();
    });
  }

  initPushNotification() {
    if (!this.platform.is('cordova')) {
      console.warn("Push notifications not initialized. Cordova is not available - Run in physical device");
      return;
    }
    const options: PushOptions = {
      android: {
        senderID: '1091890097761'
      },
      ios: {
        alert: 'true',
        badge: true,
        sound: 'true',
        clearBadge: true
      },
      windows: {}
    };

    const pushObject: PushObject = this.push.init(options);

    pushObject.on('registration').subscribe((registration: any) => {
      console.log('Device registered');
      this.teamDB.saveToken(registration.registrationId)
    })

    pushObject.on('notification').subscribe((notification) => {
      console.log('message', notification.message);
      let self = this;
      //if user using app and push notification comes
      if (notification.additionalData.foreground) {
        // if application open, show popup
        console.log(notification);
      } else {
        console.log(notification);
        //if user NOT using app and push notification comes
        self.navChild.push('NotificationPage')
        console.log("Push notification clicked");
      }
    });
    pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
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
