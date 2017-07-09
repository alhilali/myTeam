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
    let user;
    await this.teamDB.findUID(player.username.toLowerCase()).then(data => {
      user = data;
    })
    if (this.requestPlayerForm.valid && user.$key) {

      // Add request to team
      this.db.object('/teams/'+this.team.$key)
      .update({[user.$key]: false});

      this.teamDB.unsubscribeAll();
      this.view.dismiss();
    }
  }

  ionViewWillLeave() {
    this.teamDB.unsubscribeAll();
  }

}
