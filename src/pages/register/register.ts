import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../tabs/tabs';
import { AngularFireDatabase } from 'angularfire2/database';
import { FormBuilder, Validators } from '@angular/forms';
import { UsernameValidator } from '../../validators/username'

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;
  public registerForm: any;
  submitAttempt: boolean = false;
  usedEmail: boolean = false;

  constructor(private afAuth: AngularFireAuth,
    private toast: ToastController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private db: AngularFireDatabase,
    private _form: FormBuilder,
    private unameValid: UsernameValidator) {
      let usernameValidator = (control) => {
          return unameValid.checkUsername(control);
      };
      this.registerForm = this._form.group({
        "name":["",Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z-ء-ي_ ]*'), Validators.required])],
        "username": ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.-]*$')]), usernameValidator],
        "email": ["",Validators.email],
        "position": ["GK"],
        "password": ["",Validators.compose([Validators.minLength(6), Validators.required])]
      })
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
            position: user.position || 'GK'
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
      }
    }
  }

}
