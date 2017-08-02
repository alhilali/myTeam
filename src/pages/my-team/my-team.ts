import { TabsPage } from "./../tabs/tabs";
import { Component } from '@angular/core';
import {
  IonicPage, NavController, NavParams, AlertController,
  ModalController, ActionSheetController
} from 'ionic-angular';
import { StartTeamPage } from '../start-team/start-team';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
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
  myTeams: any[] = []
  myTeamsSub: any
  currentLength: number = 0
  hasNoTeams: boolean = false
  matches: any[] = [];
  months: any[] = [];
  blur: boolean = false;

  constructor(private modal: ModalController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private teamDB: MyTeamDB,
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.loadTeams();
    this.loadGames()
  }

  async loadTeams() {
    let currentUserId;
    await this.afAuth.auth.onAuthStateChanged(user => {
      if (user) currentUserId = user.uid;
    })
    if (this.myTeamsSub) this.myTeamsSub.unsubscribe();
    this.myTeamsSub = this.db.list('users/' + currentUserId
      + '/myTeams').subscribe(data => {
        if (data.length == 0) this.hasNoTeams = true;
        this.hasNoTeams = false;
        this.myTeams = []
        this.myTeams = data;
      })
  }

  async loadGames() {
    let currentUserId;
    await this.afAuth.auth.onAuthStateChanged(user => {
      if (user) currentUserId = user.uid;
    })
    this.matches = []
    this.months = []
    this.db.list('users/' + currentUserId + '/myTeams/').take(1)
      .subscribe(teams => {
        teams.forEach(team => {
          this.db.list('teams/' + team.$key + '/upcomingMatches/').take(1).subscribe(matches => {
            matches.forEach(match => {
              const monthNum = match.date.substring(0, 2);
              const monthName = moment(monthNum, 'MM').format('MMMM');
              const index = this.months.map(e => { return e.num }).indexOf(monthNum);
              if (index == -1) this.months.push({ name: monthName, num: monthNum })
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

  openMatchRequest(request) {
    this.navCtrl.push('MatchPage', { request: request })
  }

  ionViewWillLeave() {
    this.myTeamsSub.unsubscribe();
    this.teamDB.unsubscribeAll();
  }

}
