import { SocialSharing } from "@ionic-native/social-sharing";
import { Post } from "./../../models/post";
import { Component } from '@angular/core';
import {
  IonicPage, NavController, NavParams, ToastController,
  ActionSheetController, AlertController, Events
} from 'ionic-angular';
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
  segment: 'post/:id',
  defaultHistory: ['PostPage', 'HomePage']
})
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {
  post = {} as Post
  comment: string = '';
  comments: FirebaseListObservable<any[]>;
  currentUserID: any
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private teamDB: MyTeamDB,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private actionSheetCtrl: ActionSheetController,
    private socialSharing: SocialSharing,
    private alertCtrl: AlertController,
    private events: Events,
    private toast: ToastController) {
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
      if (!this.post.by) this.postNotFound();
    })
    this.comments = this.db.list('timeline/' + this.post.$key + '/comments', {
      query: {
        orderByChild: 'timestamp'
      }
    });
  }

  postNotFound() {
    let alert = this.alertCtrl.create({
      title: 'خطأ',
      subTitle: 'يبدو ان المشاركة محذوفة',
      buttons: [{
        text: 'حسناً',
        handler: () => {
          let redirect;
          if (this.navCtrl.getPrevious()) redirect = this.navCtrl.getPrevious();
          else redirect = 'HomePage';
          this.navCtrl.setRoot(redirect)
        }
      }]
    });
    alert.present();
  }

  sendComment() {
    if (this.comment !== '') {
      const date = moment.utc().format('YYYY-MM-DD HH:mm:ss')
      const commentKey = this.db.list('timeline/' + this.post.$key + '/comments').push({
        by: this.currentUserID,
        message: this.comment,
        date: date,
        timestamp: new Date().getTime()
      })

      commentKey.then(() => {
        // Notify author
        this.db.object('users/' + this.post.by + '/notifications/' + commentKey.key)
          .set({
            player: this.currentUserID,
            message: this.comment,
            type: 'postComment',
            postID: this.post.$key,
            timestamp: new Date().getTime(),
            date: date
          })

        this.comment = '';
      })
    }
  }

  deleteComment(comment) {
    // Remove notigication
    this.db.object('users/' + this.post.by + '/notifications/' + comment.$key).remove()

    // Remove comment
    this.db.object('timeline/' + this.post.$key + '/comments/' + comment.$key).remove();
  }

  openPlayer(uid) {
    this.teamDB.getUserInfo(uid).then(data => {
      this.navCtrl.push('PlayerPage', { username: data.originalUsername })
    })
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
            this.events.publish('post:deleted', this.post.$key);
            this.db.object('timeline/' + this.post.$key).remove();

            this.toast.create({
              message: 'تم حذف المشاركة',
              duration: 2200,
              position: 'top',
              cssClass: 'failure'
            }).present();

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

  footerTouchStart(event) {
    if (event.target.localName !== "textarea") {
      event.preventDefault();
    }
  }

  touchSendButton(event: Event) {
    event.preventDefault();
    this.sendComment();
  }

}
