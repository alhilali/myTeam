import { MyTeamDB } from "./../../helpers/myTeamDB";
import { Component, ViewChildren, QueryList } from '@angular/core';
import {
  IonicPage, NavController, ActionSheetController,
  NavParams, ModalController, Slides, Content
} from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the PlayerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  segment: 'player/:username'
})
@Component({
  selector: 'page-player',
  templateUrl: 'player.html',
})
export class PlayerPage {
  @ViewChildren(Slides) slides: QueryList<Slides>;
  bottomSlides: Slides
  playerInfo: FirebaseObjectObservable<any>
  myTeams: any[] = []
  section: string = '0';
  currentUID: any
  playerUID: any

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    public teamDB: MyTeamDB,
    private modlCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController) {
  }

  async ionViewWillLoad() {
    await this.afAuth.auth.onAuthStateChanged(user => {
      if (user) this.currentUID = user.uid;
    })
  }

  ngAfterViewInit() {
    this.bottomSlides = this.slides.toArray()[1];
    this.bottomSlides.lockSwipes(true);
  }

  async ionViewDidLoad() {
    await this.teamDB.findUID(this.navParams.get('username')).then(data => {
      this.playerUID = (data as any).$key
    })
    this.playerInfo = this.db.object('users/' + this.playerUID);
    this.loadMyTeams();
  }

  async loadMyTeams() {
    this.db.list('users/' + this.playerUID
      + '/myTeams').take(1).subscribe(data => {
        this.myTeams = []
        let i;
        for (i = 0; i < data.length; i++) {
          this.db.object('teams/' + data[i].teamId).take(1).subscribe(team => {
            this.myTeams.push(team)
          })
        }
      })
  }

  segmentChanged(event) {
    this.bottomSlides.lockSwipes(false);
    this.bottomSlides.slideTo(event.value, 500);
    this.bottomSlides.lockSwipes(true);
  }

  slideChanged() {
    let currentIndex = this.bottomSlides.getActiveIndex();
    this.section = currentIndex + '';
  }

  addPlayer() {
    let modal = this.modlCtrl.create('AddPlayerToTeamPage', { id: this.playerUID });
    modal.present();
  }

  options() {
    let actionSheet;
    let btns;
    if (this.currentUID != this.playerUID) {
      btns = [
        {
          text: 'إضافة اللاعب',
          handler: () => {
            this.addPlayer();
          }
        },
        {
          text: 'Block',
          role: 'destructive',
          handler: () => {
            this.db.object('users/' + this.afAuth.auth.currentUser.uid +
              '/blocked/' + this.playerUID)
              .set({ status: 'blocked' })
            this.navCtrl.pop();
          }
        },
        {
          text: 'إلغاء',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    } else {
      btns = [
        {
          text: 'تعديل بياناتي',
          handler: () => {
            //this.editProfilePage();
          }
        },
        {
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

  openTeam(team) {
    this.navCtrl.push('TeamPage', { id: team.$key })
  }

  openSettings() {
    this.navCtrl.push('SettingsPage', { id: this.playerUID });
  }

}
