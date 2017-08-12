import { MessageProvider } from "./../../providers/message/message";
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

/**
 * Generated class for the MessagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {
  @ViewChild('content') content: Content;
  allMessages: FirebaseListObservable<any[]>
  toUID: any
  currentUID: any
  newMessage: string = ''

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    public msgService: MessageProvider) {
    this.toUID = navParams.get('toUID');
  }

  ionViewDidLoad() {
    this.currentUID = this.afAuth.auth.currentUser.uid;
    this.allMessages = this.db.list('users/' + this.currentUID +
      '/messages/' + this.toUID, {
        query: {
          orderByChild: 'timestamp'
        }
      })
  }

  sendMessage() {
    this.msgService.sendMessage(this.newMessage, this.toUID).then(() => {
      this.content.scrollToBottom();
      this.newMessage = ''
    })

  }

}
