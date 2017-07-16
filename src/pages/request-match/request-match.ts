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
  teamSelected: any
  myTeams: any[] = []
  date: String = new Date().toISOString();
  time: number

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public view: ViewController,
    private teamDB: MyTeamDB) {
  }

  async ionViewDidLoad() {
    await this.teamDB.getMyTeamsCaptain().then(data=>{
      this.myTeams = data;
    })
  }

  sendRequest() {
    console.log(this.teamSelected)
  }

  closeModel() {
    this.view.dismiss();
  }

}
