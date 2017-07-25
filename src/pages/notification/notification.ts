import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Events } from 'ionic-angular';

/**
 * Generated class for the NotificationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {

  teamsRequest: any[] = []
  requestsSub: any
  matchRequests: any[] = []
  matchSub: any

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    public events: Events,
    private modlCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.loadTeamRequests();
    this.loadMatchRequests();
  }

  loadTeamRequests() {
    const ref = this.db.list('users/' + this.afAuth.auth.currentUser.uid
      + '/requests')
      this.requestsSub = ref.subscribe(data => {
        this.teamsRequest = []
        this.events.publish("tabs-page:badge-update", 'user');
        data.forEach(team => {
          this.db.object('teams/' + team.teamId).take(1).subscribe(teamInfo => {
            this.teamsRequest.push({teamInfo: teamInfo, dateRequested: team.dateRequested})
          })
        })
      })
  }

  loadMatchRequests() {
    const ref = this.db.list('matches/', {
      query: {
        orderByChild: 'toUID',
        equalTo: this.afAuth.auth.currentUser.uid
      }
    })
    this.matchSub = ref.subscribe(data => {
      this.events.publish("tabs-page:badge-update", 'match');
      this.matchRequests = []
      data.forEach(request => {
        if (request.status == 'pending') {
          this.db.object('teams/' + request.homeTeam).take(1).subscribe(teamInfo => {
            this.matchRequests.push({teamInfo: teamInfo, request: request})
          })
        }
      })
    })
  }

  doRefresh(refresher) {
    this.loadTeamRequests();
    this.loadMatchRequests();
    setTimeout(() => {
      refresher.complete();
    }, 1000);
  }

  acceptTeam(team) {
    const uid = this.afAuth.auth.currentUser.uid;

    // Add player to players list DB
    const playersList = this.db.object('/playersList/' + team.$key + '/' + uid);
    playersList.set({ uid: uid, status: 'enrolled' });

    // Add team to user list DB
    this.db.object('/users/' + uid + '/myTeams/' + team.$key)
      .update({ teamId: team.$key });

    // Remove request from user list DB
    this.db.object('users/' + uid + '/requests/' + team.$key).remove();
  }

  declineTeam(team) {
    const uid = this.afAuth.auth.currentUser.uid;

    // Remove request from user list DB
    this.db.object('users/' + uid + '/requests/' + team.$key).remove();

    // Remove player from players list DB
    this.db.object('/playersList/' + team.$key + '/' + uid).remove();
  }

  openTeam(team) {
    this.navCtrl.push('TeamPage', {team: team})
  }

  openMatchRequest(request) {
    this.navCtrl.push('MatchPage', {request: request})
  }

  ionViewWillLeave() {
    this.requestsSub.unsubscribe();
    this.matchSub.unsubscribe();
  }

}
