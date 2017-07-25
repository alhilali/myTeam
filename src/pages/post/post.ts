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
@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {
  post: any
  authorInfo: any = {}
  comment: string = '';
  comments: FirebaseListObservable<any[]>;
  currentUserID: any

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private teamDB: MyTeamDB,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private actionSheetCtrl: ActionSheetController) {
    this.post = this.navParams.get('post');
    this.currentUserID = this.afAuth.auth.currentUser.uid;
  }

  ionViewDidLoad() {
    this.teamDB.getUserInfo(this.post.by).then(data=>{
      this.authorInfo = data;
    })
    this.comments = this.db.list('timeline/'+this.post.$key+'/comments', {
      query: {
        orderByChild: 'timestamp'
      }
    });
  }

  sendComment() {
    let time = moment().format("HH:mm:ss");
    let date = moment().format("L");
    this.db.list('timeline/'+this.post.$key+'/comments').push({
      by: this.afAuth.auth.currentUser.uid,
      message: this.comment,
      date: date,
      time: time,
      timestamp: new Date().getTime()
    }).then(()=>{
      this.comment = '';
      // Refresh comment
    })
  }

  deleteComment(comment) {
    this.db.object('timeline/'+this.post.$key+'/comments/'+comment.$key).remove();
  }

  options() {
    let actionSheet;
    let btns;
    if (this.post.by == this.afAuth.auth.currentUser.uid) {
      btns = [
        {
          text: 'حذف',
          role: 'destructive',
          handler: () => {
            this.db.object('timeline/'+this.post.$key).remove();
            this.navCtrl.pop();
          }
        },{
          text: 'إلغاء',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    } else {
      btns = [
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
