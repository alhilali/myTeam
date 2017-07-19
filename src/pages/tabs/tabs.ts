import { Component } from '@angular/core';
import { Events } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { HomePage } from '../home/home';
import { MyTeamPage } from '../my-team/my-team'
import { NotificationPage } from '../notification/notification'
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MyTeamPage;
  tab3Root = NotificationPage;
  tab4Root = SearchPage;
  notificationNum: number;
  userRequestsNum: number;
  matchRequestsNum: number;

  constructor(public events: Events, private db: AngularFireDatabase,
  private afAuth: AngularFireAuth) {
  }

  updateBadge() {
    if ((this.userRequestsNum + this.matchRequestsNum) == 0)
    this.notificationNum = null;
    else this.notificationNum = this.userRequestsNum+this.matchRequestsNum;
  }

  subscribeToBadgeCountChange() {
    // Method to run when tab count changes
    return this.events
    .subscribe("tabs-page:badge-update", (type) => {
      if (type == 'match') this.checkMatchRequests();
      else if (type == 'user') this.checkUserRequests();
    });
  }

  checkUserRequests() {
    this.db.list('users/' + this.afAuth.auth.currentUser.uid
      + '/requests').take(1).subscribe(data=>{
        this.userRequestsNum = data.length;
        this.updateBadge();
      })
  }

  checkMatchRequests() {
    this.db.list('matches/', {
      query: {
        orderByChild: 'toUID',
        equalTo: this.afAuth.auth.currentUser.uid
      }
    }).take(1).subscribe(data=>{
      this.matchRequestsNum = data.length;
      this.updateBadge();
    })
  }

  ionViewWillEnter() {
    this.checkUserRequests();
    this.checkMatchRequests();
    this.subscribeToBadgeCountChange();
  }
}
