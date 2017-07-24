import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyTeamDB } from '../../helpers/myTeamDB';
/**
 * Generated class for the PostPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {
  post: any
  authorInfo: any = {}

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private teamDB: MyTeamDB) {
    this.post = this.navParams.get('post');
  }

  ionViewDidLoad() {
    this.teamDB.getUserInfo(this.post.by).then(data=>{
      this.authorInfo = data;
    })
  }

}
