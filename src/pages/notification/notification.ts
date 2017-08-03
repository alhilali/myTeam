import { MyTeamDB } from "./../../helpers/myTeamDB";
import { User } from "./../../models/user";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Events } from 'ionic-angular';
import * as moment from 'moment';

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
  userNotification: FirebaseListObservable<any[]>;
  matchSub: any
  currentUserUid: any

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    public events: Events,
    private modlCtrl: ModalController,
    private teamDB: MyTeamDB) {
  }

  async ionViewWillEnter() {
    await this.teamDB.getLoggedInUser().then(data => {
      this.currentUserUid = data;
    })
    this.loadTeamRequests();
    this.loadMatchRequests();
    this.loadUserNotifications();
  }

  loadTeamRequests() {
    if (this.requestsSub) this.requestsSub.unsubscribe();
    const ref = this.db.list('users/' + this.currentUserUid
      + '/requests')
    this.requestsSub = ref.subscribe(data => {
      this.teamsRequest = []
      this.events.publish("tabs-page:badge-update", 'user');
      data.forEach(team => {
        this.db.object('teams/' + team.teamId).take(1).subscribe(teamInfo => {
          this.teamsRequest.push({ teamInfo: teamInfo, dateRequested: team.dateRequested })
        })
      })
    })
  }

  loadMatchRequests() {
    if (this.matchSub) this.matchSub.unsubscribe();
    const ref = this.db.list('matches/', {
      query: {
        orderByChild: 'toUID',
        equalTo: this.currentUserUid
      }
    })
    this.matchSub = ref.subscribe(data => {
      this.events.publish("tabs-page:badge-update", 'match');
      this.matchRequests = []
      data.forEach(request => {
        if (request.status == 'pending') {
          this.db.object('teams/' + request.homeTeam).take(1).subscribe(teamInfo => {
            this.matchRequests.push({ teamInfo: teamInfo, request: request })
          })
        }
      })
    })
  }

  loadUserNotifications() {
    this.userNotification = this.db.list('users/' + this.currentUserUid + '/notifications/', {
      query: {
        orderByChild: 'timestamp'
      }
    });
  }

  doRefresh(refresher) {
    this.loadTeamRequests();
    this.loadMatchRequests();
    this.loadUserNotifications();
    setTimeout(() => {
      refresher.complete();
    }, 1000);
  }

  acceptTeam(team) {

    // Add player to players list DB
    const playersList = this.db.object('/playersList/' + team.$key + '/' + this.currentUserUid);
    playersList.set({ uid: this.currentUserUid, status: 'enrolled' });

    // Add team to user list DB
    this.db.object('/users/' + this.currentUserUid + '/myTeams/' + team.$key)
      .update({ teamId: team.$key });

    // Remove request from user list DB
    this.db.object('users/' + this.currentUserUid + '/requests/' + team.$key).remove();

    // Add notification to current User
    this.db.list('users/' + this.currentUserUid + '/notifications/').push({
      type: 'joinedTeam',
      by: team.$key,
      timestamps: new Date().getTime(),
      date: moment.utc().format('YYYY-MM-DD HH:mm:ss')
    })
  }

  declineTeam(team) {
    // Remove request from user list DB
    this.db.object('users/' + this.currentUserUid + '/requests/' + team.$key).remove();

    // Remove player from players list DB
    this.db.object('/playersList/' + team.$key + '/' + this.currentUserUid).remove();
  }

  openTeam(teamID) {
    this.navCtrl.push('TeamPage', { id: teamID })
  }

  openMatchRequest(request) {
    this.navCtrl.push('MatchPage', { request: request })
  }

  ionViewWillLeave() {
    this.requestsSub.unsubscribe();
    this.matchSub.unsubscribe();
  }

}
