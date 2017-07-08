
import { Component } from '@angular/core';
import { IonicPage, NavController,
   NavParams, ModalController, AlertController } from 'ionic-angular';
import { Team } from '../../models/team';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AddPlayerPage } from '../add-player/add-player'
import { MyTeamDB } from '../../helpers/myTeamDB';
import { PlayerPage } from '../player/player';

/**
 * Generated class for the TeamPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-team',
  templateUrl: 'team.html',
})
export class TeamPage {
  team = {} as Team;
  isCaptain = false;
  playersList: any[] = []
  sub: any

  constructor(public navCtrl: NavController,
      public navParams: NavParams,
      private db: AngularFireDatabase,
      private afAuth: AngularFireAuth,
      private modal: ModalController,
      private teamDB: MyTeamDB,
      private alertCtrl: AlertController) {
    this.team = navParams.get('team');
    if (this.team.captain == this.afAuth.auth.currentUser.uid) this.isCaptain = true;
  }

  ionViewWillLoad () {
  }

  ionViewDidEnter () {
    if (this.team.captain == this.afAuth.auth.currentUser.uid) this.isCaptain = true;
    this.setPlayersList();
  }

  async setPlayersList() {
    if (this.playersList.length > 0) this.playersList = [];
    await this.teamDB.getTeamPlayersWithInfo(this.team.$key).then(data=> {
      this.playersList = data;
    })

  }

  removePlayer(player) {
    this.showConfirm(player)
  }

  showConfirm(player) {
    let confirm = this.alertCtrl.create({
      title: 'هل انت متأكد من حذف اللاعب؟',
      message: 'لا يمكن التراجع بعد تنفيذ العملية',
      buttons: [
        {
          text: 'إلغاء',
          handler: () => {
            console.log('Agree clicked');
          }
        },
        {
          text: 'متأكد',
          handler: () => {
            this.db.object('teams/'+this.team.$key+'/players/'+player.id).remove();
            this.db.object('users/'+player.id+'/myTeams/'+this.team.$key).remove();
            this.setPlayersList();
          }
        }
      ]
    });
    confirm.present();
  }

  ionViewWillLeave() {
    this.teamDB.unsubscribeAll();
  }

  showPlayer(player) {
    this.navCtrl.push(PlayerPage, {player: player})
  }
  
  addPlayer() {
    const myModal = this.modal.create(AddPlayerPage, {team: this.team});
    myModal.present();
  }


}
