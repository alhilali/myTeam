import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,
   ModalController, ActionSheetController } from 'ionic-angular';
import { StartTeamPage } from '../start-team/start-team';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
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
  myTeams: any[] = []
  teamsRequest: any[] = []
  myTeamsSub: any
  requestsSub: any
  currentLength: number = 0
  hasNoTeams: boolean = false

  constructor(private modal: ModalController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private teamDB: MyTeamDB,
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController) {
  }

  ionViewDidEnter () {
    this.myTeamsSub = this.db.list('users/'+this.afAuth.auth.currentUser.uid
    +'/myTeams').subscribe(data=>{
      if (data.length == 0) this.hasNoTeams = true;
      if (this.currentLength != data.length) {
        this.myTeams = []
        data.forEach(team=>{
          this.db.object('teams/'+team.teamId).take(1).subscribe(teamInfo=>{
            this.myTeams.push(teamInfo)
          })
        })
      }
      this.currentLength = data.length;
    })

    this.requestsSub = this.db.list('users/'+this.afAuth.auth.currentUser.uid
    +'/requests').subscribe(data=>{
      this.teamsRequest = []
      data.forEach(team=>{
        this.db.object('teams/'+team.teamId).take(1).subscribe(teamInfo=>{
          this.teamsRequest.push(teamInfo)
        })
      })
    })
  }

  acceptTeam(team) {
    const uid = this.afAuth.auth.currentUser.uid;

    // Add player to players list DB
    const playersList = this.db.object('/playersList/'+team.$key+'/'+uid);
    playersList.set({uid: uid});

    // Add team to user list DB
    this.db.object('/users/'+uid+'/myTeams/'+team.$key)
    .update({teamId: team.$key});

    // Remove request from user list DB
    this.db.object('users/'+uid+'/requests/'+team.$key).remove();
  }

  declineTeam(team) {
    const uid = this.afAuth.auth.currentUser.uid;

    // Remove request from user list DB
    this.db.object('users/'+uid+'/requests/'+team.$key).remove();
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
    this.requestsSub.unsubscribe();
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
