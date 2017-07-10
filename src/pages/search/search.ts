import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Subject } from 'rxjs/Subject';
import { TeamPage } from '../team/team';
import { PlayerPage } from '../player/player';

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
  nameResults: FirebaseListObservable<any[]>;
  queryString: string = ''


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public db: AngularFireDatabase) {
    this.query = new Subject();
    this.searchTeams();
  }

  searchTeams() {
    this.items = this.db.list('teams/', {
      query: {
        orderByChild: 'name',
        equalTo: this.query
      }
    });
  }

  searchPlayers() {
    this.items = this.db.list('users/', {
      query: {
        orderByChild: 'username',
        equalTo: this.query
      }
    });
  }

  getItems(ev: any) {
    // set val to the value of the searchbar
    this.queryString = ev.target.value;
    if (this.queryString && this.type == 'players') this.queryString = this.queryString.toLowerCase();
    this.query.next(this.queryString)
  }

  open(item) {
    if (this.type == 'teams') this.navCtrl.push(TeamPage, {team: item})
    else if (this.type == 'players') this.navCtrl.push(PlayerPage, {player: item})
  }

  segmentChanged(ev: any) {
    if (ev.value == 'teams') this.searchTeams();
    if (ev.value == 'players') this.searchPlayers();
    //this.query.next(this.queryString)
  }

}
