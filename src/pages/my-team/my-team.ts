import { User } from "./../../models/user";
import { TabsPage } from "./../tabs/tabs";
import { Component } from '@angular/core';
import {
  IonicPage, NavController, NavParams, AlertController,
  ModalController, ActionSheetController
} from 'ionic-angular';
import { StartTeamPage } from '../start-team/start-team';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { MyTeamDB } from '../../helpers/myTeamDB'
import * as moment from 'moment';

/**
 * Generated class for the MyTeamPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  segment: 'myteam',
  defaultHistory: ['TabsPage', 'MyTeamPage']
})
@Component({
  selector: 'page-my-team',
  templateUrl: 'my-team.html',
})
export class MyTeamPage {
  myTeams: FirebaseListObservable<any[]>
  myTeamsSub: any
  currentLength: number = 0
  hasNoTeams: boolean = false
  matches: any[] = [];
  months: any[] = [];
  blur: boolean = false;
  currentUID: any;

  constructor(private modal: ModalController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private teamDB: MyTeamDB,
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController) {
  }

  async ionViewDidLoad() {
    await this.teamDB.getLoggedInUser().then(uid => {
      if (uid) this.currentUID = uid;
    })
    this.loadTeams();
    this.loadGames()
  }

  loadTeams() {
    this.myTeams = this.db.list('users/' + this.currentUID + '/myTeams');
  }

  async loadGames() {
    this.matches = []
    this.db.list('users/' + this.currentUID + '/myTeams/').take(1)
      .subscribe(teams => {
        teams.forEach(team => {
          this.db.list('teams/' + team.$key + '/upcomingMatches/').take(1).subscribe(matches => {
            matches.forEach(match => {
              const matchIndex = this.matches.map(e => { return e.$key }).indexOf(match.$key);
              if (matchIndex == -1) this.matches.push(match)
            });
          })
        });
      })
  }

  doRefresh(refresher) {
    this.loadGames();
    this.loadTeams();
    setTimeout(() => {
      refresher.complete();
    }, 1000);
  }

  startTeam() {
    const myModal = this.modal.create('StartTeamPage');
    myModal.present();
    this.blur = true;
    myModal.onWillDismiss(data => {
      this.blur = false;
    })
  }

  openMatchRequest(requestID) {
    this.navCtrl.push('MatchPage', { id: requestID })
  }

  ionViewWillLeave() {
    this.teamDB.unsubscribeAll();
  }

}
