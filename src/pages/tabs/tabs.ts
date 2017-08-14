import { MyTeamDB } from "./../../helpers/myTeamDB";
import { Component, ViewChild } from '@angular/core';
import { Events, IonicPage, Tabs } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage({
  segment: 'mytabs'
})
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('myTabs') tabRef: Tabs;
  tab1Root = 'HomePage';
  tab2Root = 'MyTeamPage';
  tab3Root = 'NotificationPage';
  tab4Root = 'SearchPage';
  requests: FirebaseListObservable<any[]>
  messages: FirebaseListObservable<any[]>
  currentUID: string

  constructor(public events: Events, private db: AngularFireDatabase,
    private afAuth: AngularFireAuth, public teamDB: MyTeamDB) {
  }

  checkUserRequests() {
    this.requests = this.db.list('users/' + this.currentUID
      + '/requests');
  }

  checkMessages() {
    this.messages = this.db.list('users/' + this.currentUID + '/messages/', {
      query: {
        orderByChild: 'read',
        equalTo: false
      }
    });
  }

  async ionViewWillEnter() {
    await this.afAuth.auth.onAuthStateChanged(user => {
      if (!user) {
        this.tabRef._tabs[1].show = false;
        this.tabRef._tabs[2].show = false;
      } else {
        this.tabRef._tabs[1].show = true;
        this.tabRef._tabs[2].show = true;
        this.currentUID = user.uid;
      }
    })
    this.checkUserRequests();
    this.checkMessages();
  }
}
