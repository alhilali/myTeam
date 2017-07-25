import { Component, Input } from '@angular/core';
import { NavController, AlertController,
   ModalController, ActionSheetController } from 'ionic-angular';
import { MyTeamDB } from '../../helpers/myTeamDB';
import * as moment from 'moment';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';


/**
 * Generated class for the TeamCardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'team-card',
  templateUrl: 'team-card.html'
})
export class TeamCardComponent {
  @Input('className') className: any;
  @Input('team') team: any;
  teamInfo: any = {}
  playersNum: number = 0


  constructor(private teamDB: MyTeamDB,
     public navCtrl: NavController,
     private modal: ModalController,
     private afAuth: AngularFireAuth,
     private db: AngularFireDatabase,
     private actionSheetCtrl: ActionSheetController,
     private alertCtrl: AlertController) {
  }

  async ngAfterViewInit () {
    let result;
    await this.teamDB.getTeamInfo(this.team.$key).then(data=>{
      result = data;
    })
    Promise.resolve().then(() => {
      this.db.list('playersList/'+this.team.$key).take(1).subscribe(data=>{
        this.playersNum = data.length;
      })
      this.teamInfo = result;
    });
  }

  presentActionSheet(team) {
    let actionSheet;
    let btns;
    if (team.captain == this.afAuth.auth.currentUser.uid) {
      btns = [
        {
          text: 'اجعل الفريق المفضل',
          handler: () => {
          }
        },
        {
          text: 'إعدادات الفريق',
          handler: () => {
            const editModal = this.modal.create("EditTeamPage", {team: team})
            editModal.present()
            editModal.onWillDismiss(data=>{
              //this.loadTeams();
            })
          }
        },
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

  openTeam(team) {
    this.navCtrl.push('TeamPage', {team: team})
  }

}
