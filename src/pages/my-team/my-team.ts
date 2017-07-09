import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { StartTeamPage } from '../start-team/start-team';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { TeamPage } from '../team/team';
import { MyTeamDB } from '../../helpers/myTeamDB'

/**
 * Generated class for the MyTeamPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-team',
  templateUrl: 'my-team.html',
})
export class MyTeamPage {
  hasTeam: boolean;
  hasRequests: boolean;
  myTeams: FirebaseListObservable<any[]>
  teamsRequest: FirebaseListObservable<any[]>

  constructor(private modal: ModalController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private teamDB: MyTeamDB) {
  }

  ionViewWillLoad () {
    this.getMyTeams()
    this.getRequests()
  }

  getMyTeams() {
    this.myTeams = this.db.list('teams/', {
      query: {
        orderByChild: this.afAuth.auth.currentUser.uid,
        equalTo: true
      }
    });
  }

  getRequests() {
    this.teamsRequest = this.db.list('teams/', {
      query: {
        orderByChild: this.afAuth.auth.currentUser.uid,
        equalTo: false
      }
    });
  }

  acceptTeam(team) {
    const uid = this.afAuth.auth.currentUser.uid;

    // Update request status from team
    this.db.object('teams/'+team.$key)
    .update({[uid]: true})

    // Add player to team players list
    this.db.object('/playersList/'+team.$key+'/')
    .update({[uid]: true});
  }

  declineTeam(team) {
    const uid = this.afAuth.auth.currentUser.uid;

    // Update request status from team
    this.db.object('teams/'+team.$key)
    .update({[uid]: null})

    // Remove player from team players list
    this.db.object('/playersList/'+team.$key+'/')
    .update({[uid]: null});
  }

  ionViewWillLeave() {
    this.teamDB.unsubscribeAll();
  }

  startTeam() {
    const myModal = this.modal.create(StartTeamPage);
    myModal.present();
  }

  openTeam(team) {
    this.navCtrl.push(TeamPage, {team: team})
  }

}
