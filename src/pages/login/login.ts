import { Component } from '@angular/core';
import {
  IonicPage, NavController, NavParams,
  ToastController, AlertController, LoadingController
} from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MyTeamDB } from '../../helpers/myTeamDB';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup;
  user = {} as User;

  constructor(private afAuth: AngularFireAuth, private loadingCtrl: LoadingController,
    private toast: ToastController, private alertCtrl: AlertController,
    public navCtrl: NavController, public navParams: NavParams,
    private myTeamDB: MyTeamDB, private _form: FormBuilder) {
    this.loginForm = this._form.group({
      "email": ["", Validators.email],
      "password": ["", Validators.compose([Validators.minLength(6), Validators.required])]
    })
  }

  async login(user: User) {
    let loginLoading = this.loadingCtrl.create({
      dismissOnPageChange: true,
      cssClass: 'loginLoading',
      spinner: 'crescent'
    })
    loginLoading.present();
    try {
      await this.afAuth.auth.signInWithEmailAndPassword(user.email,
        user.password);
    }
    catch (e) {
      this.myTeamDB.findEmail(user.email).then(data => {
        this.afAuth.auth.signInWithEmailAndPassword(data,
          user.password)
          .catch(err => {
            loginLoading.dismiss();
            this.showErrorToast()
          })
      }).catch(() => {
        loginLoading.dismiss();
        this.showErrorToast()
      })
    }
  }

  goBack() {
    this.navCtrl.pop();
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

  resetPassword() {
    let alert = this.alertCtrl.create({
      title: 'نسيت الرقم السري؟',
      message: 'سيتم ارسال رقم سري جديد الى بريدك الالكتروني',
      inputs: [
        {
          name: 'email',
          placeholder: 'البريد الإلكتروني'
        }
      ],
      buttons: [
        {
          text: 'تم',
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
