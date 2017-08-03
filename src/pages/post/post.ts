import { SocialSharing } from "@ionic-native/social-sharing";
import { Post } from "./../../models/post";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { MyTeamDB } from '../../helpers/myTeamDB';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as moment from 'moment';

/**
 * Generated class for the PostPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  segment: 'post/:id'
})
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {
  post = {} as Post
  authorInfo: any = {}
  comment: string = '';
  comments: FirebaseListObservable<any[]>;
  currentUserID: any

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private teamDB: MyTeamDB,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private actionSheetCtrl: ActionSheetController,
    private socialSharing: SocialSharing) {
    this.post.$key = this.navParams.get('id');
    this.afAuth.auth.onAuthStateChanged(user => {
      if (user) this.currentUserID = user.uid;
    })
  }

  async ionViewDidLoad() {
    let res;
    await this.teamDB.getPostInfo(this.post.$key).then(data => {
      res = data
      this.post = res
    })
    this.teamDB.getUserInfo(this.post.by).then(data => {
      this.authorInfo = data;
    })
    this.comments = this.db.list('timeline/' + this.post.$key + '/comments', {
      query: {
        orderByChild: 'timestamp'
      }
    });
  }

  sendComment() {
    let time = moment().format("HH:mm:ss");
    let date = moment().format("L");
    this.db.list('timeline/' + this.post.$key + '/comments').push({
      by: this.currentUserID,
      message: this.comment,
      date: date,
      time: time,
      timestamp: new Date().getTime()
    }).then(() => {
      this.comment = '';
      // Refresh comment
    })
  }

  deleteComment(comment) {
    this.db.object('timeline/' + this.post.$key + '/comments/' + comment.$key).remove();
  }

  options() {
    let actionSheet;
    let btns;
    if (this.post.by == this.currentUserID) {
      btns = [
        {
          text: 'مشاركة',
          handler: () => {
            this.socialSharing.share(this.post.info, this.post.title,
              "https://firebasestorage.googleapis.com/v0/b/myteam-29a5b.appspot.com/o/1500455988652%2Fbg.jpg?alt=media&token=88cee9ee-6b3e-4942-a756-99242b5fcbac", "felmel3ab://")
          }
        },
        {
          text: 'حذف',
          role: 'destructive',
          handler: () => {
            this.db.object('timeline/' + this.post.$key).remove();
            this.navCtrl.pop();
          }
        },
        {
          text: 'إلغاء',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    } else {
      btns = [
        {
          text: 'مشاركة',
          handler: () => {
            this.socialSharing.share(this.post.info, this.post.title,
              "https://firebasestorage.googleapis.com/v0/b/myteam-29a5b.appspot.com/o/1500455988652%2Fbg.jpg?alt=media&token=88cee9ee-6b3e-4942-a756-99242b5fcbac", "felmel3ab://")
          }
        },
        {
          text: 'Report',
          role: 'destructive',
          handler: () => {
            this.db.list('reports/').push(this.post)
          }
        },
        {
          text: 'إلغاء',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    }
    actionSheet = this.actionSheetCtrl.create({
      buttons: btns
    })
    actionSheet.present()
  }

}
