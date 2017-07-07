import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
/**
 * Generated class for the PlayerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-player',
  templateUrl: 'player.html',
})
export class PlayerPage {
  player: User

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.player = this.navParams.get('player');
  }

}
