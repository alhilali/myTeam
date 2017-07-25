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
@IonicPage()
@Component({
  selector: 'page-match',
  templateUrl: 'match.html',
})
export class MatchPage {
  homeTeam: any = {}
  awayTeam: any = {}
  date: any
  time: any
  stadium: any
  requestInfo: any
  request: FirebaseObjectObservable<any>;
  previousGames: any[] = []
  currentUser: boolean = false

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private view: ViewController,
    private teamDB: MyTeamDB,
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth) {
      this.requestInfo = this.navParams.get('request');
      this.request = this.db.object('/matches/'+this.requestInfo.$key)
      if (this.afAuth.auth.currentUser.uid == this.requestInfo.toUID) this.currentUser = true;
  }

  ionViewDidLoad() {
    this.initData();
  }

  async initData() {
    await this.teamDB.getTeamInfo(this.requestInfo.homeTeam).then(data=>{
      this.homeTeam = data;
    })

    await this.teamDB.getTeamInfo(this.requestInfo.awayTeam).then(data=>{
      this.awayTeam = data;
    })
  }

  acceptMatch() {
    // Update request status
    this.db.object('/matches/'+this.requestInfo.$key).update({status: 'approved'})

    // Add match to home team DB
    this.db.object('/teams/'+this.requestInfo.homeTeam+'/upcomingMatches/'
    +this.requestInfo.$key).set({
      homeTeam: this.requestInfo.homeTeam,
      awayTeam: this.requestInfo.awayTeam,
      date: this.requestInfo.date
    })

    // Add match to away team DB
    this.db.object('/teams/'+this.requestInfo.awayTeam+'/upcomingMatches/'
    +this.requestInfo.$key).set({
      homeTeam: this.requestInfo.homeTeam,
      awayTeam: this.requestInfo.awayTeam,
      date: this.requestInfo.date
    })
  }

  declineMatch() {
    this.view.dismiss();
    this.db.object('/matches/'+this.requestInfo.$key).remove();
  }

  openTeam(team) {
    this.navCtrl.push('TeamPage', {team: team})
  }

  closeModel() {
    this.view.dismiss();
  }

}
