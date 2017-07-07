
import { Component } from '@angular/core';
import { IonicPage, NavController,
   NavParams, ModalController, AlertController } from 'ionic-angular';
import { Team } from '../../models/team';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AddPlayerPage } from '../add-player/add-player'
import { MyTeamDB } from '../../helpers/myTeamDB';

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
  isCaptin = false;
  players: FirebaseListObservable<any>;
  playersList: any[] = []
  sub: any

  constructor(public navCtrl: NavController,
      public navParams: NavParams,
      private db: AngularFireDatabase,
      private afAuth: AngularFireAuth,
      private modal: ModalController,
      private teamDB: MyTeamDB,
      private alertCtrl: AlertController) {
    this.team.name = navParams.get('name');
    this.team.id = navParams.get('id');
    this.team.captin = navParams.get('captin');
  }

  ionViewWillLoad () {
    if (this.team.captin == this.afAuth.auth.currentUser.uid) this.isCaptin = true;
    this.players = this.db.list('/teams/'+this.team.id+'/players/');
  }

  async ionViewDidEnter () {
    this.setPlayersList();
  }

  async setPlayersList() {
    if (this.playersList.length > 0) this.playersList = [];
    await this.teamDB.getTeamPlayersWithInfo(this.team.id).then(data=> {
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
            this.db.object('teams/'+this.team.id+'/players/'+player.id).remove();
            this.db.object('users/'+player.id+'/myTeams/'+this.team.id).remove();
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


  addPlayer() {
    const myModal = this.modal.create(AddPlayerPage, {teamId: this.team.id, name: this.team.name});
    myModal.present();
  }


}
