import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,
ViewController } from 'ionic-angular';
import { MyTeamDB } from '../../helpers/myTeamDB'

/**
 * Generated class for the RequestMatchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-request-match',
  templateUrl: 'request-match.html',
})
export class RequestMatchPage {
  selectedTeam: any
  myTeams: any[] = []
  date: String = new Date().toISOString();
  time: number
  stadium: string
  awayTeam: any

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public view: ViewController,
    private teamDB: MyTeamDB) {
      this.awayTeam = navParams.get('team');
  }

  async ionViewDidLoad() {
    await this.teamDB.getMyTeamsCaptain().then(data=>{
      this.myTeams = data;
    })
  }

  sendRequest() {
    this.teamDB.sendMatchRequest({
      fromUID: this.selectedTeam.captain,
      toUID: this.awayTeam.captain,
      homeTeam: this.selectedTeam.$key,
      awayTeam: this.awayTeam.$key,
      date: this.date,
      time: this.time,
      stadium: this.stadium
    });
  }

  closeModel() {
    this.view.dismiss();
  }

}
