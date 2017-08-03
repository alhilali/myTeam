import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Subject } from 'rxjs/Subject';

/**
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  query: Subject<any>;
  type: string = 'teams'
  items: FirebaseListObservable<any[]>;
  queryString: string


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public db: AngularFireDatabase) {
    this.query = new Subject();
    this.searchTeams();
  }

  searchTeams() {
    this.items = this.db.list('teams/', {
      query: {
        orderByChild: 'name',
        startAt: this.query,
        limitToFirst: 5
      }
    });
  }

  searchPlayers() {
    this.items = this.db.list('users/', {
      query: {
        orderByChild: 'username',
        startAt: this.query,
        limitToFirst: 5
      }
    });
  }

  getItems(ev: any) {
    // set val to the value of the searchbar
    let query = ev.target.value;
    if (query && this.type == 'players') query = query.toLowerCase();
    if (query) this.query.next(query)
  }

  open(item) {
    if (this.type == 'teams') this.navCtrl.push('TeamPage', { id: item.$key })
    else if (this.type == 'players') this.navCtrl.push('PlayerPage', { username: item.originalUsername })
  }

  segmentChanged(ev: any) {
    this.queryString = ''
    if (ev.value == 'teams') this.searchTeams();
    if (ev.value == 'players') this.searchPlayers();
    //this.query.next(this.queryString)
  }

  onClear(event) {
  }

}
