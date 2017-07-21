import { Component } from '@angular/core';
import { IonicPage, NavController, Slides,
   NavParams, ModalController, AlertController } from 'ionic-angular';
import { Team } from '../../models/team';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AddPlayerPage } from '../add-player/add-player'
import { MyTeamDB } from '../../helpers/myTeamDB';
import { PlayerPage } from '../player/player';
import { RequestMatchPage } from '../request-match/request-match';
import { MatchPage } from '../match/match'
import * as moment from 'moment';

/**
 * Generated class for the TeamPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-team',
  templateUrl: 'team.html',
})
export class TeamPage {
  team = {} as Team;
  isCaptain = false;
  playersList: any[] = []
  playersListSub: any
  section: string = 'one'
  matches: FirebaseListObservable<any[]>;
  months: any[] = [];

  constructor(public navCtrl: NavController,
      public navParams: NavParams,
      private db: AngularFireDatabase,
      private afAuth: AngularFireAuth,
      private modal: ModalController,
      private teamDB: MyTeamDB,
      private alertCtrl: AlertController,
      private modlCtrl: ModalController) {
    this.team = navParams.get('team');
    if (this.team.captain == this.afAuth.auth.currentUser.uid) this.isCaptain = true;
  }

  ionViewDidEnter () {
    if (this.team.captain == this.afAuth.auth.currentUser.uid) this.isCaptain = true;
    this.playersListSub = this.db.list('playersList/'+this.team.$key)
    .subscribe(data=>{
      this.playersList = []
      let i;
      for(i = 0; i < data.length; i++) {
        if (data[i].status != 'pending') {
          this.db.object('users/'+data[i].uid).take(1).subscribe(user=>{
            this.playersList.push(user);
          })
        }
      }
    })
  }

  segmentChanged(event) {
    if (event.value == 'three') this.loadGames();
  }

  loadGames() {
    this.matches = this.db.list('/teams/'+this.team.$key+'/upcomingMatches/')
    this.setUpMonths();
  }

  setUpMonths() {
    this.matches.take(1).subscribe(data=>{
      data.forEach(match => {
        this.db.object('matches/'+match.$key).take(1).subscribe(matchInfo=>{
          const monthNum = matchInfo.date.substring(0, 2);
          const monthName = moment(monthNum, 'MM').format('MMMM');
          const index = this.months.map(e=> {return e.num}).indexOf(monthNum);
          if (index == -1) this.months.push({name:monthName, num:monthNum})
        })
      });
    })
  }

  openMatchRequest(request) {
    let modal = this.modlCtrl.create(MatchPage, {request: request});
    modal.present();
  }

  removePlayer(player) {
    if(player.$key == this.team.captain) {
      this.alertCtrl.create({
        title: 'خطأ في حذف لاعب',
        subTitle: 'لا يمكنك حذف كابتن الفريق',
        buttons: ['حسناً'],
      }).present();
    } else this.showConfirm(player)
  }

  showConfirm(player) {
    let confirm = this.alertCtrl.create({
      title: 'هل انت متأكد من حذف اللاعب؟',
      message: 'لا يمكن التراجع بعد تنفيذ العملية',
      buttons: [
        {
          text: 'إلغاء',
          handler: () => {
            //console.log('Cancel clicked');
          }
        },
        {
          text: 'متأكد',
          handler: () => {
            this.db.object('users/'+player.$key+'/myTeams/'+this.team.$key).remove();
            this.db.object('playersList/'+this.team.$key+'/'+player.$key).remove();
          }
        }
      ]
    });
    confirm.present();
  }

  ionViewWillLeave() {
    this.playersListSub.unsubscribe();
    this.teamDB.unsubscribeAll();
  }

  showPlayer(player) {
    this.navCtrl.push(PlayerPage, {player: player})
  }

  addPlayer() {
    const myModal = this.modal.create(AddPlayerPage, {team: this.team});
    myModal.present();
  }

  requestMatch() {
    const myModal = this.modal.create(RequestMatchPage, {team: this.team});
    myModal.present();
  }


}
