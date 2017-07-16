import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { MyTeamPage } from '../pages/my-team/my-team';
import { StartTeamPage } from '../pages/start-team/start-team'
import { TeamPage } from '../pages/team/team';
import { AddPlayerPage } from '../pages/add-player/add-player';
import { PlayerPage } from '../pages/player/player'
import { SearchPage } from '../pages/search/search'
import { AddPlayerToTeamPage } from '../pages/add-player-to-team/add-player-to-team'
import { NotificationPage } from '../pages/notification/notification'
import { RequestMatchPage } from '../pages/request-match/request-match'

import { UsernameValidator } from '../validators/username'
import { MyTeamDB } from '../helpers/myTeamDB'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from './app.firebase.config'
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { Camera } from '@ionic-native/camera';
import { Keyboard } from '@ionic-native/keyboard';

import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { ParallaxHeaderDirective } from '../directives/parallax-header/parallax-header';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '22320c44'
  }
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WelcomePage,
    LoginPage,
    RegisterPage,
    EditProfilePage,
    MyTeamPage,
    StartTeamPage,
    TeamPage,
    AddPlayerPage,
    PlayerPage,
    SearchPage,
    AddPlayerToTeamPage,
    NotificationPage,
    RequestMatchPage,
    ParallaxHeaderDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: 'الرجوع',
      swipeBackEnabled: true
    }),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,

    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WelcomePage,
    LoginPage,
    RegisterPage,
    EditProfilePage,
    MyTeamPage,
    StartTeamPage,
    TeamPage,
    AddPlayerPage,
    PlayerPage,
    SearchPage,
    AddPlayerToTeamPage,
    NotificationPage,
    RequestMatchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MyTeamDB,
    UsernameValidator,
    Camera,
    Keyboard,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
