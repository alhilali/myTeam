import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { UsernameValidator } from '../validators/username'
import { MyTeamDB } from '../helpers/myTeamDB'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from './app.firebase.config'
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { Camera } from '@ionic-native/camera';
import { Keyboard } from '@ionic-native/keyboard';
import { CalendarModule } from "ion2-calendar";

import { ComponentsModule } from '../components/components.module'

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '22320c44'
  }
};

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      swipeBackEnabled: true,
      tabsHideOnSubPages: true,
    }),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    CalendarModule,
    ComponentsModule,
    BrowserAnimationsModule,
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MyTeamDB,
    UsernameValidator,
    Camera,
    Keyboard,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
