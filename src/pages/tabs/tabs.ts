import { MyTeamDB } from "./../../helpers/myTeamDB";
import { Component, ViewChild } from '@angular/core';
import { Events, IonicPage, Tabs } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
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
  notificationNum: number;
  userRequestsNum: number = 0;
  matchRequestsNum: number = 0;

  constructor(public events: Events, private db: AngularFireDatabase,
    private afAuth: AngularFireAuth, public teamDB: MyTeamDB) {
  }

  ngAfterViewInit() {
    //console.log(this.tabRef);
  }

  updateBadge() {
    if ((this.userRequestsNum + this.matchRequestsNum) == 0)
      this.notificationNum = null;
    else this.notificationNum = this.userRequestsNum + this.matchRequestsNum;
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
      + '/requests').take(1).subscribe(data => {
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
    }).take(1).subscribe(data => {
      let count = 0;
      for (let i = 0; i < data.length; i++) {
        if (data[i].status == 'pending') count++;
        if (i == data.length - 1) {
          this.matchRequestsNum = count;
          this.updateBadge();
        }
      }
    })
  }

  ionViewWillEnter() {
    this.afAuth.auth.onAuthStateChanged(user => {
      if (!user) {
        this.tabRef._tabs[1].show = false;
        this.tabRef._tabs[2].show = false;
      } else {
        this.tabRef._tabs[1].show = true;
        this.tabRef._tabs[2].show = true;
      }
    })
    // this.checkUserRequests();
    // this.checkMatchRequests();
    // this.subscribeToBadgeCountChange();
  }
}
