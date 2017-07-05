import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../tabs/tabs';

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

  user = {} as User;
  slides = [
    {
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];
  constructor(private afAuth: AngularFireAuth,
    private toast: ToastController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        this.navCtrl.setRoot(TabsPage);
      }
    });
  }

  async login(user: User) {
    try {
    const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email,
       user.password);
       if (result) this.navCtrl.setRoot(TabsPage);
       console.log(result);
     }
     catch (e) {
       this.toast.create({
         message: 'الرجاء التأكد من الايميل او الرقم السري',
         duration: 1500,
         showCloseButton: true,
         dismissOnPageChange: true,
         closeButtonText: 'حسناً'
       }).present();
       console.error(e);
     }
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

}
