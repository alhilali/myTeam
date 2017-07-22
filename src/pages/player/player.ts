import { Component, ElementRef} from '@angular/core';
import { IonicPage, NavController,
   NavParams, ModalController, Slides, Content } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { EditProfilePage } from '../edit-profile/edit-profile'
import { TeamPage } from '../team/team';
import { AddPlayerToTeamPage } from '../add-player-to-team/add-player-to-team'
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
  player: any
  currentUser: boolean = false
  myTeams: any[] = []
  myTeamsSub: any
  section: string = 'one';

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private afAuth: AngularFireAuth,
     private db: AngularFireDatabase,
     private modlCtrl: ModalController,
     public element: ElementRef) {
    this.player = this.navParams.get('player');
  }

  ionViewWillLoad() {
    if(this.player.$key == this.afAuth.auth.currentUser.uid) this.currentUser = true;
  }

  ionViewDidLoad () {
    this.myTeamsSub = this.db.list('users/'+this.player.$key
    +'/myTeams').subscribe(data=>{
      this.myTeams = []
      let i;
      for(i = 0; i<data.length; i++) {
        this.db.object('teams/'+data[i].teamId).take(1).subscribe(team=>{
          this.myTeams.push(team)
        })
      }
    })
  }

  segmentChanged(event) {
    console.log("here")
    console.log(this.element.nativeElement)
  }

  addPlayer() {
    let modal = this.modlCtrl.create(AddPlayerToTeamPage, {player: this.player});
    modal.present();
  }

  ionViewWillLeave() {
    this.myTeamsSub.unsubscribe();
  }

  openModal() {
    this.myTeamsSub.unsubscribe();
    let modal = this.modlCtrl.create(EditProfilePage, {player: this.player});
    modal.present();
  }

  openTeam(team) {
    this.navCtrl.push(TeamPage, {team: team})
  }

}
