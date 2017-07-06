import { Component } from '@angular/core';
import { IonicPage, NavController,
   NavParams, ModalController } from 'ionic-angular';
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
      private teamDB: MyTeamDB) {
    this.team.name = navParams.get('name');
    this.team.id = navParams.get('id');
    this.team.captin = navParams.get('captin');
  }

  ionViewWillLoad () {
    if (this.team.captin == this.afAuth.auth.currentUser.uid) this.isCaptin = true;
    this.players = this.db.list('/teams/'+this.team.id+'/players/');
    this.ionViewDidEnter();
  }

  ionViewDidEnter () {
    if (this.playersList.length > 0) this.playersList = [];
    this.sub = this.players.subscribe(data=> {
      let count = 0;
      const len = data.length;
      data.forEach(player=>{
        this.teamDB.getInfo(player.$key).then(user => {
          this.playersList.push(user);
        })
        count++;
        if (count == data.length) this.sub.unsubscribe();
      })
    })
  }

  ionViewWillLeave() {
    this.sub.unsubscribe();
    this.teamDB.unsubscribeAll();
  }


  addPlayer() {
    const myModal = this.modal.create(AddPlayerPage, {teamId: this.team.id, name: this.team.name});
    myModal.present();
  }


}
