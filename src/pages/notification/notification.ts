import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { TeamPage } from '../team/team'
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

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private db: AngularFireDatabase,
    private afAuth: AngularFireAuth, public events: Events) {
  }

  ionViewDidEnter() {
    this.requestsSub = this.db.list('users/' + this.afAuth.auth.currentUser.uid
      + '/requests').subscribe(data => {
        this.teamsRequest = []
        this.events.publish("tabs-page:badge-update", data.length);
        data.forEach(team => {
          this.db.object('teams/' + team.teamId).take(1).subscribe(teamInfo => {
            this.teamsRequest.push({teamInfo: teamInfo, dateRequested: team.dateRequested})
          })
        })
      })
  }

  doRefresh(refresher) {
    //console.log('Begin async operation', refresher);

    setTimeout(() => {
      //console.log('Async operation has ended');
      refresher.complete();
    }, 3000);
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
  }

  openTeam(team) {
    this.navCtrl.push(TeamPage, {team: team})
  }

  ionViewWillLeave() {
    this.requestsSub.unsubscribe();
  }

}
