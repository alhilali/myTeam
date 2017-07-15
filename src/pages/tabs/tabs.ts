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

  constructor(public events: Events, private db: AngularFireDatabase,
  private afAuth: AngularFireAuth) {
  }

  updateBadge(count) {
    if (count == 0) this.notificationNum = null;
    else this.notificationNum = count;
  }

  subscribeToBadgeCountChange() {
    // Method to run when tab count changes
    return this.events
    .subscribe("tabs-page:badge-update", (count) => {
      this.updateBadge(count);
    });
  }

  ionViewWillEnter() {
    this.db.list('users/' + this.afAuth.auth.currentUser.uid
      + '/requests').take(1).subscribe(data=>{
        this.updateBadge(data.length);
      })
    this.subscribeToBadgeCountChange();
  }
}
