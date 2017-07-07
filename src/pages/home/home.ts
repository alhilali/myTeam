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

  user: any
  constructor(private afAuth: AngularFireAuth,
    private teamDB: MyTeamDB,
    public navCtrl: NavController) {

  }

  async ionViewWillLoad() {
    await this.teamDB.getInfo(this.afAuth.auth.currentUser.uid).then(user => {
      this.user = user;
    })
  }

  openModal() {
    this.navCtrl.push(PlayerPage, {player: this.user});
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
