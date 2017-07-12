import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, LoadingController,
   NavParams, ToastController, AlertController,
   Slides} from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../tabs/tabs';
import { MyTeamDB } from '../../helpers/myTeamDB';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsernameValidator } from '../../validators/username';
import { AngularFireDatabase } from 'angularfire2/database';
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
  @ViewChild(Slides) slides: Slides;
  user = {} as User;
  registerForm: any;
  loginForm: FormGroup;
  submitAttempt: boolean = false;
  usedEmail: boolean = false;
  splash = true;

  constructor(private afAuth: AngularFireAuth,
    private loadingCtrl: LoadingController,
    private toast: ToastController,private alertCtrl: AlertController,
    public navCtrl: NavController, public navParams: NavParams,
    private myTeamDB: MyTeamDB, private _form: FormBuilder,
    private unameValid: UsernameValidator, private db: AngularFireDatabase) {
      let usernameValidator = (control) => {
          return unameValid.checkUsername(control);
      };
      this.registerForm = this._form.group({
        "name":["",Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z-ء-ي_ ]*'), Validators.required])],
        "username": ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.-]*$')]), usernameValidator],
        "email": ["",Validators.email],
        "password": ["",Validators.compose([Validators.minLength(6), Validators.required])]
      })
      this.loginForm = this._form.group({
        "email": ["",Validators.email],
        "password": ["",Validators.compose([Validators.minLength(6), Validators.required])]
      })
  }

  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }

  goToSlide() {
    this.slides.slideTo(1, 500);
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

  slideRegister() {
    this.slides.slideTo(2, 500);
  }

  async register(user: User) {
    this.submitAttempt = true;
    if (this.registerForm.valid) {
      try {
        const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email,
        user.password).then((u) => {
          const userInfo = this.db.object('/users/'+this.afAuth.auth.currentUser.uid);
          userInfo.set({
            originalUsername: user.username,
            username: user.username.toLowerCase(),
            name: user.name,
            position: 'GK'
          });
          const usernameInfo = this.db.object('/usernames/'+user.username.toLowerCase());
          usernameInfo.set({
            email: user.email
          });
        })
        if (result) this.navCtrl.setRoot(TabsPage);
        this.toast.create({
         message: ' مرحباً بك '+user.name,
         duration: 3000,
         position: 'middle'
        }).present();
      }
      catch (e) {
        if (e.code == 'auth/email-already-in-use') this.usedEmail = true;
        setTimeout(()=> {this.usedEmail = false}, 2000);
      }
    }
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
