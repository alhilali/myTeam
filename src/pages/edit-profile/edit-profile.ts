import { Component } from '@angular/core';
import {
  IonicPage, NavController,
  NavParams, ViewController,
  ToastController, AlertController, ActionSheetController
} from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { MyTeamDB } from '../../helpers/myTeamDB';
import { FormBuilder, Validators } from '@angular/forms';
import { UsernameValidator } from '../../validators/username'
import { User } from '../../models/user'
import firebase from 'firebase';
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
  editForm: any;
  submitAttempt: boolean = false;
  playerUID: string;
  playerInfo: FirebaseObjectObservable<any>
  newPlayerInfo = {} as User
  currentUsername: string;

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
    private actionSheetCtrl: ActionSheetController,
    private camera: Camera) {
    this.playerUID = navParams.get('id');
    this.setUpValidation();
    this.playerInfo = db.object('users/' + this.playerUID)
  }

  async setUpValidation() {
    await this.teamDB.getUserInfo(this.playerUID).then(data => {
      this.newPlayerInfo = data;
      this.currentUsername = data.originalUsername;
    })

    let usernameValidator = (control) => {
      return this.unameValid.checkEditUsername(control, this.newPlayerInfo.username);
    };
    this.editForm = this._form.group({
      "name": ["", Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z-ء-ي_ ]*'), Validators.required])],
      "username": ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.-]*$')]), usernameValidator],
      "email": ["", Validators.email],
      "position": ["GK"]
    })

  }

  closeModal() {
    this.view.dismiss();
  }

  update(user) {
    this.submitAttempt = true;
    const currUser = this.afAuth.auth.currentUser;
    if (this.editForm.controls.name.valid && this.editForm.controls.username.valid && currUser && currUser.uid) {
      const userRef = this.db.object('/users/' + currUser.uid, { preserveSnapshot: true });
      userRef.take(1).subscribe(snap => {
        if (snap.val().name != user.name) {
          userRef.update({ name: user.name })
          this.displayToast();
        }
        if (snap.val().position != user.position) {
          userRef.update({ position: user.position }).then()
          //this.user.position = user.position;
          this.displayToast();
        }
        if (snap.val().originalUsername != user.originalUsername) {
          userRef.update({
            originalUsername: user.originalUsername,
            username: user.originalUsername.toLowerCase()
          })
          if (this.currentUsername.toLowerCase() != user.originalUsername.toLowerCase()) {
            let email = currUser.email
            if (!email) email = 'twitter'
            this.db.object('usernames/' + user.originalUsername.toLowerCase()).set({ email: email });
            this.db.object('usernames/' + this.currentUsername.toLowerCase()).remove();
            this.currentUsername = user.originalUsername;
          }
        }
      })
    }
  }

  displayToast() {
    this.toast.create({
      message: 'تم تحديث معلوماتك بنجاح',
      duration: 2200,
      dismissOnPageChange: true,
      position: 'top'
    }).present();
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
              .then(function (user) {
                user.updateEmail(newEmail).then(() => {
                  //bind.updateNotification('الايميل');
                }).catch(err => {
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

  changePhoto(type) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: true,
      targetWidth: 300,
      targetHeight: 300
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;

      let storageRef = firebase.storage().ref();
      const filename = this.afAuth.auth.currentUser.uid;
      const imageRef = storageRef.child(`${filename}/${type}.jpg`)

      imageRef.putString(base64Image, firebase.storage.StringFormat.DATA_URL)
        .then((snap) => {
          const ref = this.db.object('/users/' + this.afAuth.auth.currentUser.uid)

          if (type == 'profilePic') ref.update({ profilePic: snap.downloadURL })
          else ref.update({ bg: snap.downloadURL })
          this.displayToast()
        })
    }, (err) => {
      // Handle error
    });
  }

  deletePic(type) {
    let storageRef = firebase.storage().ref();
    const filename = this.afAuth.auth.currentUser.uid;
    const imageRef = storageRef.child(`${filename}/${type}.jpg`)
    imageRef.delete().then(() => {

    }).catch((error) => {
      // Uh-oh, an error occurred!
      console.log(error)
    });
    if (type == 'profilePic') {
      this.db.object('/users/' + this.afAuth.auth.currentUser.uid + '/profilePic')
        .set('http://www.gscadvisory.com/wp-content/uploads/2016/04/blank.jpg');
    }
    else {
      this.db.object('/users/' + this.afAuth.auth.currentUser.uid + '/bg')
        .set('http://www.publicdomainpictures.net/pictures/50000/nahled/sunset-profile-background.jpg');
    }
    this.displayToast();
  }

  presentActionSheet(type) {
    let typeConverted = type == 'bg' ? 'خلفية الحساب' : 'الصورة الشخصية'
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'تغيير ' + typeConverted,
          handler: () => {
            this.changePhoto(type);
          }
        }, {
          text: 'حذف الصورة',
          role: 'destructive',
          handler: () => {
            this.deletePic(type);
          }
        }, {
          text: 'إلغاء',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    })
    actionSheet.present()
  }
}
