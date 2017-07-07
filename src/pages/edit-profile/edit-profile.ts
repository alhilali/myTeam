import { Component } from '@angular/core';
import { App,
  IonicPage, NavController,
  NavParams, ViewController,
  ToastController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { WelcomePage } from '../welcome/welcome';
import { AngularFireDatabase } from 'angularfire2/database';
import { MyTeamDB } from '../../helpers/myTeamDB';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { UsernameValidator } from '../../validators/username'

/**
 * Generated class for the EditProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
  user: any = {}
  shown = false;
  toastMessage: any;
  editSub: any;
  editUnameSub: any;
  public editForm: any;
  submitAttempt: boolean = false;
  currentUsername: string

  constructor(public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private app: App,
    private view: ViewController,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private toast: ToastController,
    private teamDB: MyTeamDB,
    private _form: FormBuilder,
    private unameValid: UsernameValidator) {
      let usernameValidator = (control) => {
          return unameValid.checkUsername(control);
      };
      this.editForm = this._form.group({
        "name":["",Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z-ء-ي_ ]*'), Validators.required])],
        "username": ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.-]*$')]), usernameValidator],
        "email": ["",Validators.email],
        "position": ["GK"]
      })
  }

  closeModal() {
    this.view.dismiss();
  }

  async ionViewWillLoad() {
    let userInfo;
    await this.teamDB.getInfo(this.afAuth.auth.currentUser.uid).then(user => {
      userInfo = user;
    })
    this.user.email = this.afAuth.auth.currentUser.email;
    this.user.position = userInfo.position;
    this.user.name = userInfo.name;
    this.user.username = userInfo.originalUsername;
    this.currentUsername = this.user.username;
  }

  update(user) {
    this.submitAttempt = true;
    const currUser = this.afAuth.auth.currentUser;
    if (this.editForm.controls.name.valid && this.editForm.controls.email.valid) {
      if (currUser && currUser.email && currUser.uid) {
        const userRef = this.db.object('/users/'+currUser.uid, { preserveSnapshot: true });
        this.editSub = userRef.subscribe(snap => {
          if (snap.val().name != user.name) {
            userRef.update({name: user.name})
            this.updateNotification('الاسم');
            this.editSub.unsubscribe();
          }
          if (snap.val().position != user.position) {
            userRef.update({position: user.position})
            this.updateNotification('المركز');
            this.editSub.unsubscribe();
          }
          this.editSub.unsubscribe();
        })
        if (user.email != currUser.email) {
          this.updateEmail(currUser.email, user.email);
        }
      }
    }

    if (this.currentUsername != this.user.username
      && this.editForm.controls.username.valid && currUser) {
        this.db.object('/users/'+currUser.uid)
        .update({
          originalUsername: user.username,
          username: user.username.toLowerCase()
        })

        this.updateNotification('المعرف الشخصي');
        this.db.object('usernames/'+user.username.toLowerCase()).set({exists: true});
        this.db.object('usernames/'+this.currentUsername.toLowerCase()).remove();
        this.currentUsername = user.username;
    }
  }

  updateNotification(word) {
    if (this.shown) this.toastMessage.dismiss();
    this.toastMessage = this.toast.create({
       message: ' تم تحديث ' + word + ' بنجاح',
       duration: 2200,
       dismissOnPageChange: true,
       position: 'middle'
     });
    this.toastMessage.present();
    this.shown = true;
  }



  updateEmail(oldEmail, newEmail) {
    let prompt = this.alertCtrl.create({
      title: 'تحديث الايميل',
      message: "الرجاء ادخال الباسوورد من اجل تحديث الايميل",
      inputs: [
        {
          name: 'password',
          placeholder: 'الباسوورد',
          type: 'password'
        },
      ],
      buttons: [
        {
          text: 'تحديث',
          handler: data => {
            let bind = this
            this.afAuth.auth.signInWithEmailAndPassword(oldEmail, data.password)
            .then(function(user) {
                user.updateEmail(newEmail).then(()=>{
                  bind.updateNotification('الايميل');
                }).catch(err=> {
                  console.log(err);
                  bind.alertUserError(err);
                })
            }).catch(err => {
              console.log(err);
              this.alertUserError(err);
            })
          }
        },
        {
          text: 'الغاء',
          handler: data => {
            //console.log('Cancel clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  ionViewWillLeave() {
    if (this.editSub) this.editSub.unsubscribe();
    if (this.editUnameSub) this.editUnameSub.unsubscribe();
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
      case 'auth/email-already-in-use':
      message = 'البريد الالكتروني مستخدم من قبل شخص آخر'
      break;
      case 'auth/wrong-password':
      message = 'الرجاء التأكد من الرقم السري'
      break;
    }
    this.alertCtrl.create({
      title: 'خطأ في تغيير البريد الإلكتروني',
      subTitle: message,
      buttons: ['حسناً'],
    }).present();
  }

  logout() {
    if (this.editSub) this.editSub.unsubscribe();
    if (this.editUnameSub) this.editUnameSub.unsubscribe();
    this.afAuth.auth.signOut();
    this.navCtrl.popAll();
    this.app.getRootNav().setRoot(WelcomePage);
    //this.view.dismiss();
  }

}
