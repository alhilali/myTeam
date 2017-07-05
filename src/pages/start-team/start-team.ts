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
        "city":["riyadh"]
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
        ref.set({
          captin: data.uid,
          name: team.name,
          city: team.city || 'riyadh',
          estDate: new Date().toDateString()
        })
        const userInfo = this.db.object('/users/'+data.uid+'/myTeams/'+newKey);
        userInfo.set({name: team.name});
        saveSub.unsubscribe();
        this.closeModal();
      }
    });
  }

}
