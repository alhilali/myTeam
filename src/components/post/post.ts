import { RequestMatchPage } from "./../../pages/request-match/request-match";
import { Component, Input, trigger, state, style, animate, transition } from '@angular/core';
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
  templateUrl: 'post.html',
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: '0' })),
      state('*', style({ opacity: '1' })),
      transition('void <=> *', animate('300ms ease-in'))
    ])
  ]
})
export class PostComponent {
  @Input('className') className: any;
  @Input('type') type: any;
  @Input('post') postInfo: any;
  user: any = {}
  date: any = ''
  commentsNum: any;
  teamInfo: any = {}
  month: any
  day: any

  constructor(private teamDB: MyTeamDB, public navCtrl: NavController) {
  }

  ngAfterViewInit() {
    Promise.resolve().then(() => {
      if (this.postInfo.type == 'match') {
        this.month = moment(this.postInfo.matchDate, 'MM/DD/YYYY').format('MMM');
        this.day = moment(this.postInfo.matchDate, 'MM/DD/YYYY').format('D');
        this.teamDB.getTeamInfo(this.postInfo.teamID).then(data => {
          this.teamInfo = data;
        })
      }
      this.teamDB.getUserInfo(this.postInfo.by).then(data => {
        this.user = data;
      })
      this.teamDB.getCommentsNum(this.postInfo.$key).then(data => {
        this.commentsNum = data;
      })
      this.date = moment(this.postInfo.date + ' ' + this.postInfo.time,
        "MM/DD/YYYY HH:mm:ss").locale('ar-sa').fromNow();
    });
  }

  openPlayer() {
    this.navCtrl.push('PlayerPage', { player: this.user });
  }

  openPost() {
    this.navCtrl.push('PostPage', { post: this.postInfo });
  }

  openTeam() {
    this.navCtrl.push('TeamPage', { team: this.teamInfo })
  }

  requestMatch() {
    this.navCtrl.push('RequestMatchPage', { team: this.teamInfo })
  }

}
