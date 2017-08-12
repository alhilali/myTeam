import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { RequestMatchPage } from "./../../pages/request-match/request-match";
import { Component, Input, trigger, state, style, animate, transition } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
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
  @Input('post') postInfo: any = {}
  @Input('postID') postID: any;
  user: any = {}
  date: any = ''
  likes: FirebaseListObservable<any[]>
  liked: FirebaseListObservable<any[]>
  commentsNum: FirebaseListObservable<any[]>
  teamInfo: any = {}
  month: any
  day: any

  constructor(public teamDB: MyTeamDB,
    public navCtrl: NavController,
    private modal: ModalController,
    private db: AngularFireDatabase) {
  }

  async ngAfterViewInit() {
    if (!this.postInfo.by) {
      let res
      await this.teamDB.getPostInfo(this.postID).then(data => {
        res = data;
        this.postInfo = res;
      })
    }
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
      this.commentsNum = this.db.list('timeline/' + this.postInfo.$key + '/comments/')
      this.likes = this.db.list('timeline/' + this.postInfo.$key + '/likes/');
      if (this.teamDB.loggedIn) {
        this.liked = this.db.list('timeline/' + this.postInfo.$key + '/likes/', {
          query: {
            orderByChild: 'id',
            equalTo: this.teamDB.userInfo.uid
          }
        })
      }
      // const converted = tzMoment.tz(this.postInfo.date, 'Asia/Riyadh').format();
      // const shortConverted = converted.substring(0, 19);
      // console.log(shortConverted);
      let momentDate = moment.utc(this.postInfo.date, "YYYY-MM-DD HH:mm:ss").local().format("YYYY-MM-DD HH:mm:ss");
      this.date = moment(momentDate).fromNow();
    });
  }

  async like() {
    if (this.teamDB.loggedIn) {
      await this.teamDB.like(this.postInfo.$key)
      this.db.object('users/' + this.postInfo.by + '/notifications/' + this.postInfo.$key + this.teamDB.userInfo.uid)
        .set({
          player: this.teamDB.userInfo.uid,
          title: this.postInfo.title,
          type: 'likedPost',
          postID: this.postInfo.$key,
          timestamp: new Date().getTime(),
          date: moment.utc().format('YYYY-MM-DD HH:mm:ss')
        })
    }
  }

  unlike() {
    if (this.teamDB.loggedIn) {
      this.teamDB.unlike(this.postInfo.$key);
      //this.liked = false;
      //this.likesNum--;
    }
  }

  openPlayer() {
    this.navCtrl.push('PlayerPage', { username: this.user.originalUsername });
  }

  requestPlayer() {
    if (this.teamDB.loggedIn) {
      this.modal.create('AddPlayerToTeamPage', { player: this.user }).present();
    }
  }

  openPlayerLike(uid) {
    this.teamDB.getUserInfo(uid).then(data => {
      this.navCtrl.push('PlayerPage', { username: data.originalUsername });
    })
  }

  openPost() {
    this.navCtrl.push('PostPage', { id: this.postInfo.$key })
  }

  openTeam() {
    this.navCtrl.push('TeamPage', { id: this.teamInfo.$key })
  }

  requestMatch() {
    if (this.teamDB.loggedIn) {
      this.modal.create('RequestMatchPage', { team: this.teamInfo, givenDate: this.postInfo.matchDate }).present()
    }
  }

}
