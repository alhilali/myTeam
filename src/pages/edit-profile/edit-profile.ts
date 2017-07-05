import { Component } from '@angular/core';
import { App,
  IonicPage, NavController,
  NavParams, ViewController,
  ToastController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { WelcomePage } from '../welcome/welcome';
import { AngularFireDatabase } from 'angularfire2/database';
import { MyTeamDB } from '../../helpers/myTeamDB';

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
  user: any
  shown = false;
  toastMessage: any;
  editSub: any;

  constructor(public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private app: App,
    private view: ViewController,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private toast: ToastController,
    private teamDB: MyTeamDB) {
      this.user = {};
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
    this.user.username = userInfo.username;
  }

  update(user) {
    const currUser = this.afAuth.auth.currentUser;
    const userRef = this.db.object('/users/'+currUser.uid+'/info/', { preserveSnapshot: true });
    if (currUser && currUser.email && currUser.uid) {
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
      })
      if (user.email != currUser.email) {
        this.updateEmail(currUser.email, user.email);
      }
    }
  }

  updateNotification(word) {
    if (this.shown) this.toastMessage.dismiss();
    this.toastMessage = this.toast.create({
       message: ' تم تحديث ' + word + ' بنجاح',
       duration: 3000,
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
          text: 'الغاء',
          handler: data => {
            //console.log('Cancel clicked');
          }
        },
        {
          text: 'تحديث',
          handler: data => {
            let vis = this
            this.afAuth.auth.signInWithEmailAndPassword(oldEmail, data.password)
            .then(function(user) {
                user.updateEmail(newEmail);
                vis.updateNotification('الايميل');
            }).catch(err => {

            })
          }
        }
      ]
    });
    prompt.present();
  }

  ionViewWillLeave() {
    if (this.editSub) this.editSub.unsubscribe();
  }

  logout() {
    if (this.editSub) this.editSub.unsubscribe();
    this.afAuth.auth.signOut();
    this.navCtrl.popAll();
    this.app.getRootNav().setRoot(WelcomePage);
    //this.view.dismiss();
  }

}
