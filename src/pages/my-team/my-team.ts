import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,
   ModalController, ActionSheetController } from 'ionic-angular';
import { StartTeamPage } from '../start-team/start-team';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { TeamPage } from '../team/team';
import { MyTeamDB } from '../../helpers/myTeamDB'
import { MatchPage } from '../match/match'
import * as moment from 'moment';

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
  myTeams: any[] = []
  myTeamsSub: any
  currentLength: number = 0
  hasNoTeams: boolean = false
  matches: any[] = [];
  months: any[] = [];

  constructor(private modal: ModalController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private teamDB: MyTeamDB,
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad () {
    this.myTeamsSub = this.db.list('users/'+this.afAuth.auth.currentUser.uid
    +'/myTeams').subscribe(data=>{
      if (data.length == 0) this.hasNoTeams = true;
        this.hasNoTeams = false;
        this.myTeams = []
        data.forEach(team=>{
          this.db.object('teams/'+team.teamId).take(1).subscribe(teamInfo=>{
            this.myTeams.push(teamInfo)
          })
        })
    })

    this.loadGames()
  }

  loadGames() {
    this.db.list('users/'+this.afAuth.auth.currentUser.uid+'/myTeams/').take(1)
    .subscribe(teams=>{
      teams.forEach(team => {
        this.db.list('teams/'+team.$key+'/upcomingMatches/').take(1).subscribe(matches=>{
          matches.forEach(match => {
            const monthNum = match.date.substring(0, 2);
            const monthName = moment(monthNum, 'MM').format('MMMM');
            const index = this.months.map(e=> {return e.num}).indexOf(monthNum);
            if (index == -1) this.months.push({name:monthName, num:monthNum})
            const matchIndex = this.matches.map(e=> {return e.$key}).indexOf(match.$key);
            if (matchIndex == -1) this.matches.push(match)
          });
        })
      });
    })
  }

  openMatchRequest(request) {
    let modal = this.modal.create(MatchPage, {request: request});
    modal.present();
  }

  presentActionSheet(team) {
    let actionSheet;
    let btns;
    if (team.captain == this.afAuth.auth.currentUser.uid) {
      btns = [
        {
          text: 'حذف الفريق',
          role: 'destructive',
          handler: () => {
            actionSheet.dismiss().then(()=>{
              this.deleteTeam(team)
            })
            return false;
          }
        },{
          text: 'اجعل الفريق المفضل',
          handler: () => {
          }
        },{
          text: 'إلغاء',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    } else {
      btns = [
        {
          text: 'انسحب من الفريق',
          role: 'destructive',
          handler: () => {
            actionSheet.dismiss().then(()=>{
              this.exitTeam(this.afAuth.auth.currentUser.uid, team.$key)
            })
            return false;
          }
        },{
          text: 'اجعل الفريق المفضل',
          handler: () => {
          }
        },{
          text: 'إلغاء',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    }
    actionSheet = this.actionSheetCtrl.create({
      title: 'إعدادات الفريق',
      buttons: btns
    })
    actionSheet.present()
  }

  deleteTeam(team) {
    let confirm = this.alertCtrl.create({
      title: 'هل انت متأكد من حذف الفريق؟',
      message: 'لا يمكن التراجع بعد تنفيذ العملية',
      buttons: [
        {
          text: 'متأكد',
          handler: () => {
            let dataToDelete = {}
            dataToDelete['teams/'+team.$key] = null;
            dataToDelete['playersList/'+team.$key] = null;

            this.db.list('playersList/'+team.$key).take(1).subscribe(data=>{
              let i;
              for (i=0; i < data.length; i++) {
                dataToDelete['users/'+data[i].uid+'/myTeams/'+team.$key] = null;
                dataToDelete['users/'+data[i].uid+'/requests/'+team.$key] = null;
                if (i == data.length - 1) {
                  this.db.object('/').update(dataToDelete);
                }
              }
            })

          }
        },
        {
          text: 'إلغاء',
          handler: () => {
            //console.log('Cancel clicked');
          }
        }
      ]
    })
    confirm.present();
  }

  exitTeam(playerId, teamId) {
    let confirm = this.alertCtrl.create({
      title: 'هل انت متأكد من الانسحاب من الفريق؟',
      message: 'لا يمكن التراجع بعد تنفيذ العملية',
      buttons: [
        {
          text: 'متأكد',
          handler: () => {
            let dataToDelete = {}
            dataToDelete['users/'+playerId+'/myTeams/'+teamId] = null;
            dataToDelete['playersList/'+teamId+'/'+playerId] = null;
            this.db.object('/').update(dataToDelete);
          }
        },
        {
          text: 'إلغاء',
          handler: () => {
            //console.log('Cancel clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  ionViewWillLeave() {
    this.myTeamsSub.unsubscribe();
    this.teamDB.unsubscribeAll();
  }

  startTeam() {
    const myModal = this.modal.create(StartTeamPage);
    myModal.present();
  }

  openTeam(team) {
    this.navCtrl.push(TeamPage, {team: team})
  }

}
