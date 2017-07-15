import { Component } from '@angular/core';
import {IonicPage, NavController,
  NavParams, ViewController,
  ToastController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { MyTeamDB } from '../../helpers/myTeamDB';
import { FormBuilder, Validators } from '@angular/forms';
import { UsernameValidator } from '../../validators/username'
import { User } from '../../models/user'
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
  user = {} as User
  cpyUser: any = {}
  shown = false;
  toastMessage: any;
  editSub: any;
  editUnameSub: any;
  editForm: any;
  submitAttempt: boolean = false;
  currentUsername: string
  same: boolean = true

  constructor(public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private view: ViewController,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private toast: ToastController,
    private teamDB: MyTeamDB,
    private _form: FormBuilder,
    private unameValid: UsernameValidator,
    private camera: Camera) {
      this.user = this.navParams.get('player');
      let usernameValidator = (control) => {
          return unameValid.checkEditUsername(control, this.user.username);
      };
      this.cpyUser = Object.assign({}, this.user)
      this.editForm = this._form.group({
        "name":["",Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z-ء-ي_ ]*'), Validators.required])],
        "username": ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.-]*$')]), usernameValidator],
        "email": ["",Validators.email],
        "position": ["GK"]
      })
  }

  closeModal() {
    if (!this.submitAttempt) {
      this.user.name = this.cpyUser.name;
      this.user.originalUsername = this.cpyUser.originalUsername;
      this.user.position = this.cpyUser.position;
    }
    this.view.dismiss();
  }

  ionViewWillLoad() {
    this.currentUsername = this.user.originalUsername
    this.user.email = this.afAuth.auth.currentUser.email;
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
            this.user.name = user.name;
            this.updateNotification('الاسم');
          }
          if (snap.val().position != user.position) {
            userRef.update({position: user.position}).then()
            //this.user.position = user.position;
            this.updateNotification('المركز');
          }
        })
        if (user.email != currUser.email) {
          this.updateEmail(currUser.email, user.email);
        }
      }
    }

    if (this.editForm.controls.username.valid && currUser) {
      this.db.object('/users/'+currUser.uid)
      .update({
        originalUsername: user.originalUsername,
        username: user.originalUsername.toLowerCase()
      })

      if (this.currentUsername != user.originalUsername) this.updateNotification('المعرف الشخصي');
      if (this.currentUsername.toLowerCase() != user.originalUsername.toLowerCase()){
        this.db.object('usernames/'+user.originalUsername.toLowerCase()).set({email: user.email});
        this.db.object('usernames/'+this.currentUsername.toLowerCase()).remove();
        this.currentUsername = user.originalUsername;
      }
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

  changePhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: true
    }
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

  logout() {
    if (this.editSub) this.editSub.unsubscribe();
    if (this.editUnameSub) this.editUnameSub.unsubscribe();
    this.view.dismiss();
    this.afAuth.auth.signOut();
  }

}
