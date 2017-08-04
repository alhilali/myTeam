import { MyTeamDB } from "./../../helpers/myTeamDB";
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

  requests: FirebaseListObservable<any[]>
  userNotification: FirebaseListObservable<any[]>;
  currentUserUid: any

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    public events: Events,
    private modlCtrl: ModalController,
    private teamDB: MyTeamDB) {
  }

  async ionViewDidLoad() {
    await this.teamDB.getLoggedInUser().then(data => {
      this.currentUserUid = data;
    })
    this.loadRequests();
    this.loadUserNotifications();
  }

  loadRequests() {
    this.requests = this.db.list('users/' + this.currentUserUid
      + '/requests')
  }

  loadUserNotifications() {
    this.userNotification = this.db.list('users/' + this.currentUserUid + '/notifications/', {
      query: {
        orderByChild: 'timestamp'
      }
    });
  }

  doRefresh(refresher) {
    this.loadRequests();
    this.loadUserNotifications();
    setTimeout(() => {
      refresher.complete();
    }, 1000);
  }

  async acceptTeam(teamID, key) {
    // Add notification to team players
    let playersList = []
    await this.teamDB.getTeamPlayers(teamID).then(players => {
      playersList = players
      playersList.forEach(player => {
        if (player.status == 'enrolled') {
          this.db.list('users/' + player.$key + '/notifications/').push({
            type: 'playerJoined',
            team: teamID,
            player: this.currentUserUid,
            timestamp: new Date().getTime(),
            date: moment.utc().format('YYYY-MM-DD HH:mm:ss')
          })
        }
      })
    })

    // Add player to players list DB
    this.db.object('/playersList/' + teamID + '/' + this.currentUserUid)
      .set({ uid: this.currentUserUid, status: 'enrolled' });

    // Add team to user list DB
    this.db.object('/users/' + this.currentUserUid + '/myTeams/' + teamID)
      .update({ teamId: teamID });

    // Remove request from user list DB
    this.db.object('users/' + this.currentUserUid + '/requests/' + key).remove();

    // Add notification to current User
    this.db.list('users/' + this.currentUserUid + '/notifications/').push({
      type: 'joinedTeam',
      team: teamID,
      timestamp: new Date().getTime(),
      date: moment.utc().format('YYYY-MM-DD HH:mm:ss')
    })

  }

  clearNotification(key) {
    this.db.object('users/' + this.currentUserUid + '/notifications/' + key).remove();
  }

  clearAll() {
    this.db.object('users/' + this.currentUserUid + '/notifications/').remove();
  }


  async declineTeam(teamID, key) {
    await this.teamDB.getTeamInfo(teamID).then(team => {
      // Notify captain that player declined team invitation
      this.db.list('users/' + team.captain + '/notifications/').push({
        type: 'declinedTeamInvite',
        team: teamID,
        player: this.currentUserUid,
        timestamp: new Date().getTime(),
        date: moment.utc().format('YYYY-MM-DD HH:mm:ss')
      })
    })
    // Remove request from user list DB
    this.db.object('users/' + this.currentUserUid + '/requests/' + key).remove();

    // Remove player from players list DB
    this.db.object('/playersList/' + teamID + '/' + this.currentUserUid).remove();

  }

  openTeam(teamID) {
    this.navCtrl.push('TeamPage', { id: teamID })
  }

  async openPlayer(playerID) {
    await this.teamDB.getUserInfo(playerID).then(data => {
      this.navCtrl.push('PlayerPage', { username: data.username })
    })
  }

  openMatchRequest(requestID) {
    this.navCtrl.push('MatchPage', { id: requestID })
  }

  openPost(postID) {
    this.navCtrl.push('PostPage', { id: postID})
  }

}
