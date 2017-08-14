import { MessageProvider } from "./../../providers/message/message";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the MessagesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage {
  messagesList: FirebaseListObservable<any[]>
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private msgService: MessageProvider) {
  }

  ionViewDidLoad() {
    this.loadMessages();
  }

  loadMessages() {
    this.messagesList = this.db.list('users/' + this.afAuth.auth.currentUser.uid
      + '/messages/', {
        query: {
          orderByChild: 'read'
        }
      })
  }

  doRefresh(refresher) {
    this.loadMessages();
    setTimeout(() => {
      //console.log('Async operation has ended');
      refresher.complete();
    }, 500);
  }

  newMessage() {
    this.navCtrl.push('NewMessagePage')
  }

  openMessage(messages) {
    this.navCtrl.push('MessagePage', { toUID: messages.$key })
  }

  async deleteMessage(key) {
    await this.msgService.removeMessage(key);
  }

}
