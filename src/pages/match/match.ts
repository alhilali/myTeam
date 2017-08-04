import { Request } from "./../../models/request";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { MyTeamDB } from '../../helpers/myTeamDB';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the MatchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  segment: 'match/:id'
})
@Component({
  selector: 'page-match',
  templateUrl: 'match.html',
})
export class MatchPage {
  requestID: any
  request: FirebaseObjectObservable<any>;
  requestInfo: any;
  previousGames: any[] = []
  currentUser: boolean = false

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private view: ViewController,
    private teamDB: MyTeamDB,
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth) {
    this.requestID = this.navParams.get('id');
    this.request = this.db.object('/matches/' + this.requestID)
  }

  async ionViewDidLoad() {
    await this.teamDB.getMatchInfo(this.requestID).then(data => {
      this.requestInfo = data;
    })
    await this.teamDB.getLoggedInUser().then(uid => {
      if (this.requestInfo.toUID == uid) this.currentUser = true;
    })
  }

  acceptMatch() {
    // Update request status
    this.db.object('/matches/' + this.requestID).update({ status: 'approved' })

    // Remove Request
    this.db.object('users/' + this.requestInfo.toUID + '/requests/' + this.requestID).remove();

    // Add match to home team DB
    this.db.object('/teams/' + this.requestInfo.homeTeam + '/upcomingMatches/'
      + this.requestID).set({
        homeTeam: this.requestInfo.homeTeam,
        awayTeam: this.requestInfo.awayTeam,
      })

    // Add match to away team DB
    this.db.object('/teams/' + this.requestInfo.awayTeam + '/upcomingMatches/'
      + this.requestID).set({
        homeTeam: this.requestInfo.homeTeam,
        awayTeam: this.requestInfo.awayTeam,
      })
  }

  declineMatch() {
    this.db.object('/matches/' + this.requestID).remove();
    this.view.dismiss();
  }

  openTeam(teamID) {
    this.navCtrl.push('TeamPage', { id: teamID })
  }

  closeModel() {
    this.view.dismiss();
  }

}
