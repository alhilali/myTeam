import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController,
   NavParams, ToastController, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../tabs/tabs';
import { MyTeamDB } from '../../helpers/myTeamDB'

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

  constructor(private afAuth: AngularFireAuth,
    private loadingCtrl: LoadingController,
    private toast: ToastController,private alertCtrl: AlertController,
    public navCtrl: NavController, public navParams: NavParams,
    private myTeamDB: MyTeamDB) {
  }

  async login(user: User) {
    try {
      await this.afAuth.auth.signInWithEmailAndPassword(user.email,
       user.password);
     }
     catch (e) {
       this.myTeamDB.findEmail(user.email).then(data=> {
         this.afAuth.auth.signInWithEmailAndPassword(data,
            user.password)
            .catch(err=>{
              this.showErrorToast()
            })
       }).catch(()=> {
         this.showErrorToast()
       })
     }
  }

  showErrorToast() {
    this.toast.create({
      message: 'الرجاء التأكد من الايميل او الرقم السري',
      duration: 1500,
      showCloseButton: true,
      dismissOnPageChange: true,
      closeButtonText: 'حسناً'
    }).present();
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

  resetPassword() {
    let alert = this.alertCtrl.create({
      title: 'نسيت الرقم السري؟',
      message: 'سوف يتم ارسال رقم سري جديد لعنوانك البريدي',
      inputs: [
        {
          name: 'email',
          placeholder: 'البريد الإلكتروني'
        }
      ],
      buttons: [
        {
          text: 'ارسال رقم سري جديد',
          handler: data => {

            let loading = this.loadingCtrl.create({
              dismissOnPageChange: true,
              content: 'إعادة تعيين الرقم السري..'
            });
            loading.present();

            this.afAuth.auth.sendPasswordResetEmail(data.email).then(() => {
              loading.dismiss().then(() => {
                this.alertUserSuccess('راجع بريدك الالكتروني', 'تم إعادة تعيين الرقم السري')
              })
            }, error => {
              this.alertUserError(error);
              loading.dismiss();
            })
          }
        },
        {
          text: 'إلغاء',
          role: 'cancel',
          handler: data => {
            //console.log('Cancel clicked');
          }
        }
      ]
    });
    alert.present();
  }

  alertUserError(error) {
    let message = error;
    switch (error.code) {
      case 'auth/invalid-email':
      message = 'الرجاء التأكد من صيغة الايميل.'
      break;
      case 'auth/user-not-found':
      message = 'لا يوجد حساب مسجل بهذا البريد الالكتروني.'
      break;
    }
    this.alertCtrl.create({
      title: 'خطأ في اعادة تعيين الرقم السري',
      subTitle: message,
      buttons: ['حسناً'],
    }).present()
  }

  alertUserSuccess(title, message) {
    this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['حسناً'],
    }).present();
  }

}
