import { User } from "./../../models/user";
import { Component } from '@angular/core';
import {
  IonicPage, NavController, NavParams,
  ViewController, AlertController
} from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { MyTeamDB } from '../../helpers/myTeamDB'

/**
 * Generated class for the AddPlayerToTeamPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-player-to-team',
  templateUrl: 'add-player-to-team.html',
})
export class AddPlayerToTeamPage {
  myTeams = []
  teamsSelected = []
  error: boolean = false
  status: boolean
  player = {} as User

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private view: ViewController,
    private teamDB: MyTeamDB,
    private alertCtrl: AlertController) {
    this.player = this.navParams.get('player');
  }

  async ionViewDidLoad() {
    await this.teamDB.getMyTeamsCaptain().then(data => {
      this.myTeams = data;
    })
  }

  async updateTeamsSelected(team) {
    const index = this.teamsSelected.indexOf(team);
    await this.teamDB.checkTeamPlayers(team.$key, this.player.$key).then(data => {
      if (data && index < 0) {
        this.presentAlert(team.name)
      }
    })
    if (index > -1) this.teamsSelected.splice(index, 1)
    else this.teamsSelected.push(team)

    // No teams selected then disable button
    if (this.teamsSelected.length == 0) this.error = false;
  }

  async requestAddPlayer() {
    this.error = false;
    for (let i = 0; i < this.teamsSelected.length; i++) {
      await this.teamDB.checkTeamPlayers(this.teamsSelected[i].$key, this.player.$key).then(data => {
        if (data) {
          this.presentAlert(this.teamsSelected[i].name);
          this.error = true;
        }
      })
      if (!this.error) this.teamDB.sendRequestToPlayer(this.player.$key, this.teamsSelected[i].$key)
    }
    if (this.teamsSelected.length == 0) this.alert()
    else if (!this.error) this.view.dismiss();
  }

  presentAlert(teamName) {
    let alert = this.alertCtrl.create({
      title: 'خطأ',
      subTitle: 'سبق وتم اضافة اللاعب في فريق ' + teamName + "، الرجاء ازالة اختيار الفريق لإتمام العملية",
      buttons: ['حسناً']
    });
    alert.present();
  }

  alert() {
    let alert = this.alertCtrl.create({
      title: 'خطأ',
      subTitle: "الرجاء اختيار فريق واحد على الأقل",
      buttons: ['حسناً']
    });
    alert.present();
  }

  closeModel() {
    this.view.dismiss();
  }

}
