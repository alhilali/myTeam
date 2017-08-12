import { AngularFireAuth } from "angularfire2/auth";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Subject } from 'rxjs/Subject';
/**
 * Generated class for the NewMessagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-message',
  templateUrl: 'new-message.html',
})
export class NewMessagePage {

  players: FirebaseListObservable<any[]>;
  query: Subject<any>;
  input: string
  currentUID: string

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth) {
    this.query = new Subject();
  }

  ionViewDidLoad() {
    this.currentUID = this.afAuth.auth.currentUser.uid;
    this.players = this.db.list('users/', {
      query: {
        orderByChild: 'username',
        startAt: this.query,
        limitToFirst: 10
      }
    });
  }

  searchUsers() {
    this.query.next(this.input)
  }

  openMessage(player) {
    this.navCtrl.push('MessagePage', { toUID: player.$key })
  }
}
