import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyTeamDB } from '../../helpers/myTeamDB';
import * as moment from 'moment';

/**
 * Generated class for the PostComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'post',
  templateUrl: 'post.html'
})
export class PostComponent {
  @Input('className') className: any;
  @Input('type') type: any;
  @Input('post') postInfo: any;
  user: any = {}
  date: any = ''
  commentsNum: any;

  constructor(private teamDB: MyTeamDB, public navCtrl: NavController) {
  }

  async ngAfterViewInit () {
    let result;
    await this.teamDB.getUserInfo(this.postInfo.by).then(data=>{
      result = data;
    })
    Promise.resolve().then(() => {
      let relativeDate = moment(this.postInfo.date+' '+this.postInfo.time,
       "MM/DD/YYYY HH:mm:ss").locale('ar-sa').fromNow();
      this.teamDB.getCommentsNum(this.postInfo.$key).then(data=>{
        this.commentsNum = data;
      })
      this.user = result;
      this.date = relativeDate;
    });
  }

  openPlayer() {
    this.navCtrl.push('PlayerPage', { player: this.user });
  }

  openPost()  {
    this.navCtrl.push('PostPage', { post: this.postInfo });
  }

}
