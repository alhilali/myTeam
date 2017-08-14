import { Keyboard } from "@ionic-native/keyboard";
import { MessageProvider } from "./../../providers/message/message";
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";
import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, Content } from "ionic-angular";

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
  messageStatus: FirebaseObjectObservable<any>
  allMessagesSub: any;
  toUID: any
  currentUID: any
  newMessage: string = ''

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public keyboard: Keyboard,
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    public msgService: MessageProvider) {
    this.toUID = navParams.get('toUID');
    if (this.keyboard) {
      this.keyboard.hideKeyboardAccessoryBar(true);
      this.keyboard.disableScroll(true);
    }
  }

  ionViewDidLoad() {
    this.currentUID = this.afAuth.auth.currentUser.uid;
    this.allMessages = this.db.list('users/' + this.currentUID +
      '/messages/' + this.toUID, {
        query: {
          orderByChild: 'timestamp'
        }
      })
    this.messageStatus = this.db.object('users/' + this.toUID +
      '/messages/' + this.currentUID + '/read')
    this.markAllMessagesRead();
  }

  markAllMessagesRead() {
    this.allMessagesSub = this.db.list('users/' + this.currentUID +
      '/messages/' + this.toUID, {
        query: {
          orderByChild: 'timestamp'
        }
      }).subscribe(data => {
        data.forEach(msg => {
          if (msg.sentBy && msg.sentBy != this.currentUID) {
            this.msgService.markMsgRead(msg.$key, this.toUID);
          }
        });
      })
  }

  ionViewWillLeave() {
    this.msgService.markRead(this.toUID);
    this.allMessagesSub.unsubscribe();
  }

  sendMessage() {
    if (this.newMessage !== '') {
      this.msgService.sendMessage(this.newMessage, this.toUID).then(() => {
        this.content.scrollToBottom();
        this.newMessage = ''
      })
    }
  }

  openUser() {
    this.navCtrl.push('PlayerPage', { id: this.toUID })
  }

  footerTouchStart(event) {
    if (event.target.localName !== "textarea") {
      event.preventDefault();
    }
  }

  touchSendButton(event: Event) {
    event.preventDefault();
    this.sendMessage();
  }

}
