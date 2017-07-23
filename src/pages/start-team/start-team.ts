import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the StartTeamPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-start-team',
  templateUrl: 'start-team.html',
})
export class StartTeamPage {
  team: any;
  public teamForm: any;

  constructor(
    private view: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private _form: FormBuilder) {
      this.team = {};
      this.teamForm = this._form.group({
        "name":["",Validators.required],
        "city":["الرياض"]
      })
  }

  closeModal() {
    this.view.dismiss();
  }

  saveTeam(team) {
    let newKey = new Date().getTime();
    const ref = this.db.object('/teams/'+newKey);
    const saveSub = this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        let uid = data.uid
        ref.set({
          captain: uid,
          name: team.name,
          city: team.city || 'الرياض',
          logo: 'http://playerleague.it/uploads/club/242d7e5ff1bd143ca11fd4d4b0dd1f8a.png',
          estDate: new Date().toDateString()
        })

        // Add player to players list DB
        const playersList = this.db.object('/playersList/'+newKey+'/'+uid);
        playersList.set({uid: uid, status: 'enrolled'});

        // Add team to user list DB
        this.db.object('/users/'+uid+'/myTeams/'+newKey)
        .set({teamId: newKey});
        saveSub.unsubscribe();
        this.closeModal();
      }
    });
  }

}
