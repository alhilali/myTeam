import { Component } from '@angular/core';
import { IonicPage, NavController,
   NavParams, ViewController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { MyTeamDB } from '../../helpers/myTeamDB'
import { User } from '../../models/user';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { UsernameValidator } from '../../validators/username'

/**
 * Generated class for the AddPlayerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-player',
  templateUrl: 'add-player.html',
})
export class AddPlayerPage {
  player = {};
  user = {} as User;
  team: any
  public requestPlayerForm: any;

  constructor(private view: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private db: AngularFireDatabase,
    private teamDB: MyTeamDB,
    private _form: FormBuilder,
    private unameValid: UsernameValidator) {
      this.team = navParams.get('team');
      console.log(this.team)
      let usernameValidator = (control) => {
          return unameValid.checkValidUsername(control);
      };
      let teamValidator = (control) => {
          return unameValid.checkTeam(control, this.team.players);
      };
      this.requestPlayerForm = _form.group({
        "username": ['',
        Validators.compose([Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.-]*$')]),
        Validators.composeAsync([usernameValidator, teamValidator])]
      })
  }

  closeModal() {
    this.view.dismiss();
  }

  async requestAddPlayer(player) {
    let uid;
    await this.teamDB.findUID(player.username.toLowerCase()).then(data => {
      uid = data;
    })
    if (this.requestPlayerForm.valid && uid.$key) {

      const teamRequests = this.db.object('/teams/'+
      this.navParams.get('teamId')+'/requests/'+uid.$key);
      teamRequests.set({
        dateRequested: new Date().toDateString(),
      });

      const userRequests = this.db.object('/users/'+
      uid.$key+'/requests/'+this.navParams.get('teamId'));
      userRequests.set({
        name: this.navParams.get('name'),
        dateRequested: new Date().toDateString(),
      });
      this.teamDB.unsubscribeAll();
      this.view.dismiss();
    }
  }

  ionViewWillLeave() {
    this.teamDB.unsubscribeAll();
  }

}
