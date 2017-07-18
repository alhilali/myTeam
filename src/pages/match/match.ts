import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { MyTeamDB } from '../../helpers/myTeamDB';

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
  requsetInfo: any

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private view: ViewController,
    private teamDB: MyTeamDB) {
      this.requsetInfo = this.navParams.get('request');
      console.log(this.requsetInfo)
  }

  ionViewDidLoad() {
    this.initData();
  }

  async initData() {
    await this.teamDB.getTeamInfo(this.requsetInfo.homeTeam).then(data=>{
      this.homeTeam = data;
    })

    await this.teamDB.getTeamInfo(this.requsetInfo.awayTeam).then(data=>{
      this.awayTeam = data;
    })
  }

  closeModel() {
    this.view.dismiss();
  }

}
