import { RequestMatchPage } from "./../../pages/request-match/request-match";
import { Component, Input, trigger, state, style, animate, transition } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyTeamDB } from '../../helpers/myTeamDB';
import * as moment from 'moment';
import * as tzMoment from 'moment-timezone'

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
  likesNum: any;
  teamInfo: any = {}
  month: any
  day: any
  liked: boolean = false;

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
      this.teamDB.getLikesNum(this.postInfo.$key).then(data => {
        this.likesNum = data;
      })
      this.teamDB.likeOrNot(this.postInfo.$key).then(data => {
        let res;
        res = data;
        this.liked = res;
      })
      // const converted = tzMoment.tz(this.postInfo.date, 'Asia/Riyadh').format();
      // const shortConverted = converted.substring(0, 19);
      // console.log(shortConverted);
      let momentDate = moment.utc(this.postInfo.date, "YYYY-MM-DD HH:mm:ss").local().format("YYYY-MM-DD HH:mm:ss");
      this.date = moment(momentDate).fromNow();
    });
  }

  like() {
    this.teamDB.like(this.postInfo.$key);
    this.liked = true;
    this.likesNum++;
  }

  unlike() {
    this.teamDB.unlike(this.postInfo.$key);
    this.liked = false;
    this.likesNum--;
  }

  openPlayer() {
    this.navCtrl.push('PlayerPage', { player: this.user });
  }

  openPost() {
    this.navCtrl.push('PostPage', { post: this.postInfo })
  }

  openTeam() {
    this.navCtrl.push('TeamPage', { id: this.teamInfo.$key })
  }

  requestMatch() {
    this.navCtrl.push('RequestMatchPage', { team: this.teamInfo })
  }

}
