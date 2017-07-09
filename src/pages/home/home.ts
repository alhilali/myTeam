import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditProfilePage } from '../edit-profile/edit-profile';
import { AngularFireAuth } from 'angularfire2/auth';
import { MyTeamDB } from '../../helpers/myTeamDB';
import { PlayerPage } from '../player/player';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private afAuth: AngularFireAuth,
    private teamDB: MyTeamDB,
    public navCtrl: NavController) {
  }

  ionViewWillLoad() {
  }

  async openModal() {
    await this.teamDB.getInfo(this.afAuth.auth.currentUser.uid).then(user => {
      this.navCtrl.push(PlayerPage, {player: user});
    })
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
