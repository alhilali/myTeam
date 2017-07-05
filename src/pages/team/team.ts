import { Component } from '@angular/core';
import { IonicPage, NavController,
   NavParams, ModalController } from 'ionic-angular';
import { Team } from '../../models/team';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AddPlayerPage } from '../add-player/add-player'

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
  captinId: FirebaseObjectObservable<any>;
  teamInfo: FirebaseObjectObservable<any>;
  sub: any

  constructor(public navCtrl: NavController,
      public navParams: NavParams,
      private db: AngularFireDatabase,
      private afAuth: AngularFireAuth,
      private modal: ModalController) {
    this.team.name = navParams.get('name');
    this.team.id = navParams.get('id');
  }

  ionViewWillLoad () {
    this.players = this.db.list('/teams/'+this.team.id+'/players/');
    this.captinId = this.db.object('/teams/'+this.team.id, { preserveSnapshot: true });
    this.sub = this.captinId.subscribe(snapshot => {
      if (snapshot.val().captin == this.afAuth.auth.currentUser.uid)
        this.isCaptin = true;
        this.sub.unsubscribe();
    });
  }

  ionViewWillLeave() {
    if (this.sub) this.sub.unsubscribe();
  }

  addPlayer() {
    const myModal = this.modal.create(AddPlayerPage, {teamId: this.team.id, name: this.team.name});
    myModal.present();
  }


}
