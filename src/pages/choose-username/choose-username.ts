import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, ModalController, LoadingController } from "ionic-angular";
import { FormBuilder, Validators } from '@angular/forms';
import { UsernameValidator } from '../../validators/username';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the ChooseUsernamePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-choose-username',
  templateUrl: 'choose-username.html',
})
export class ChooseUsernamePage {

  public registerForm: any;
  username: string

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private db: AngularFireDatabase,
    private _form: FormBuilder,
    private unameValid: UsernameValidator,
    private mdlController: ModalController,
    private loadingCtrl: LoadingController) {
    let usernameValidator = (control) => {
      return unameValid.checkUsername(control);
    };
    this.registerForm = this._form.group({
      "username": ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.-]*$')]), usernameValidator]
    })
    this.navCtrl.swipeBackEnabled = false;
    this.username = this.navParams.get('twitterUsername') + '';
  }

  register() {
    let loginLoading = this.loadingCtrl.create({
      dismissOnPageChange: true,
      spinner: 'crescent'
    })
    loginLoading.present();
    const userInfo = this.db.object('/users/' + this.navParams.get('user').uid);
    userInfo.update({
      originalUsername: this.username,
      username: this.username.toLowerCase(),
    });

    const usernameInfo = this.db.object('/usernames/' + this.username.toLowerCase());
    usernameInfo.set({
      twitter: 'true'
    });

    this.navCtrl.setRoot('TabsPage')
  }

  openTerms() {
    this.mdlController.create('TermsPage').present();
  }

}
