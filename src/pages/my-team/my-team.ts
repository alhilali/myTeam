import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { StartTeamPage } from '../start-team/start-team';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { TeamPage } from '../team/team';
import { MyTeamDB } from '../../helpers/myTeamDB'

/**
 * Generated class for the MyTeamPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-team',
  templateUrl: 'my-team.html',
})
export class MyTeamPage {
  hasTeam: boolean;
  hasRequests: boolean;
  myTeams: FirebaseListObservable<any>;
  teamsRequest: [any];

  constructor(private modal: ModalController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private teamDB: MyTeamDB) {
  }

  ionViewWillLoad () {
    this.hasTeam = false;
    const currUser = this.afAuth.auth.currentUser;
    if (currUser && currUser.uid) {
      this.myTeams = this.db.list('/users/'+currUser.uid+'/myTeams/');
      this.hasTeam = true; // need to work on logic of enrolled in team

      this.teamDB.getRequests(currUser.uid).then(list => {
        this.teamsRequest = list;
        if (this.teamsRequest) this.hasRequests = true;
      })
    }
  }

  ionViewWillLeave() {
    this.teamDB.unsubscribeAll();
  }
  startTeam() {
    const myModal = this.modal.create(StartTeamPage);
    myModal.present();
  }

  openTeam(team) {
    this.navCtrl.push(TeamPage, {id: team.$key, name: team.name})
  }

}
