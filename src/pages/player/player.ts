import { Component, ViewChildren, QueryList } from '@angular/core';
import {
  IonicPage, NavController, ActionSheetController,
  NavParams, ModalController, Slides, Content
} from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

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
  player = {} as User
  prmPlayer: any = {}
  playerID: string = ''
  playerSub: any
  currentUser: boolean = false
  myTeams: any[] = []
  section: string = '0';
  @ViewChildren(Slides) slides: QueryList<Slides>;
  bottomSlides: Slides

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private modlCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController) {
    this.prmPlayer = navParams.get('player');
    if (!this.prmPlayer) this.playerID = navParams.get('playerID');
    else this.playerID = this.prmPlayer.$key;
    this.player.bg = '';
  }

  ionViewWillLoad() {
    if (this.playerID == this.afAuth.auth.currentUser.uid) this.currentUser = true;
    this.loadPlayer();
  }

  ngAfterViewInit() {
    this.bottomSlides = this.slides.toArray()[1];
    this.bottomSlides.lockSwipes(true);
  }

  ionViewDidLoad() {
    this.loadPlayer();
    this.loadMyTeams();
  }

  loadPlayer() {
    if (this.playerSub) this.playerSub.unsubscribe();
    this.playerSub = this.db.object('users/' + this.playerID)
      .subscribe(data => {
        this.player = data;
        if (!this.player.bg) this.player.bg = 'http://www.publicdomainpictures.net/pictures/50000/nahled/sunset-profile-background.jpg';
      })
  }

  loadMyTeams() {
    this.db.list('users/' + this.playerID
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
    let modal = this.modlCtrl.create('AddPlayerToTeamPage', { player: this.player });
    modal.present();
  }

  options() {
    let actionSheet;
    let btns;
    if (!this.currentUser) {
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
              '/blocked/' + this.playerID)
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

  ionViewWillLeave() {
    this.playerSub.unsubscribe();
  }

  openModal() {
    this.playerSub.unsubscribe();
    let modal = this.modlCtrl.create('EditProfilePage', { player: this.player });
    modal.present();
  }

  openTeam(team) {
    this.navCtrl.push('TeamPage', { team: team })
  }

}
