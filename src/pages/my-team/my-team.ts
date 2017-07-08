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
  myTeams: any[] = []
  teamsRequest: any = [];

  constructor(private modal: ModalController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private teamDB: MyTeamDB) {

  }

  async ionViewWillLoad () {
  }

  ionViewDidEnter () {

    this.getMyTeams()
    this.getRequests()
  }

  getMyTeams() {
    this.teamDB.getMyTeams(this.afAuth.auth.currentUser.uid).then((data) => {
      this.myTeams = data;
    })
  }

  getRequests() {
    this.teamDB.getRequests(this.afAuth.auth.currentUser.uid).then((data) => {
      this.teamsRequest = data;
    })
  }

  acceptTeam(team) {
    // Remove request from player
    this.db.object('users/'+this.afAuth.auth.currentUser.uid+
    '/requests/'+team.$key).remove();

    // Update request status from team
    this.db.object('teams/'+team.$key+'/requests/'+this.afAuth.auth.currentUser.uid)
    .update({status: 'approved'})

    // Add team to my teams
    this.db.object('users/'+this.afAuth.auth.currentUser.uid+
    '/myTeams/'+team.$key).set({dateJoined: new Date().toDateString()})

    // Add player to team players
    this.db.object('teams/'+team.$key+'/players/'+this.afAuth.auth.currentUser.uid)
    .set({dateJoined: new Date().toDateString()})

    // Update data
    this.getRequests();
    this.getMyTeams();
  }

  declineTeam(team) {
    // Remove request from player
    this.db.object('users/'+this.afAuth.auth.currentUser.uid+
    '/requests/'+team.$key).remove();

    // Update request status from team
    this.db.object('teams/'+team.$key+'/requests/'+this.afAuth.auth.currentUser.uid)
    .update({status: 'declined'})

    // Update data
    this.getRequests();
    this.getMyTeams();
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
