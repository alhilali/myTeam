import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { MyTeamDB } from '../../helpers/myTeamDB';
import { PlayerPage } from '../player/player';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private afAuth: AngularFireAuth,
    private teamDB: MyTeamDB, private actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController) {
  }

  doRefresh(refresher) {
    //console.log('Begin async operation', refresher);

    setTimeout(() => {
      //console.log('Async operation has ended');
      refresher.complete();
    }, 3000);
  }

  async openModal() {
    await this.teamDB.getUserInfo(this.afAuth.auth.currentUser.uid).then(user => {
      this.navCtrl.push(PlayerPage, { player: user });
    })
  }

  compose() {
    this.actionSheetCtrl.create({
      title: 'طلب جديد',
      buttons: [
        {
          text: 'ابحث عن فريق',
          handler: () => {
          }
        }, {
          text: 'ابحث عن مباراة',
          handler: () => {
          }
        }, {
          text: 'ابحث عن بطولة',
          handler: () => {
          }
        }, {
          text: 'إلغاء',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    }).present()
  }

}
