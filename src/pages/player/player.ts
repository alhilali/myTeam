import { Component, ViewChildren, QueryList} from '@angular/core';
import { IonicPage, NavController,
   NavParams, ModalController, Slides, Content } from 'ionic-angular';
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
     private modlCtrl: ModalController) {
       this.prmPlayer = navParams.get('player');
       this.player.bg = '';
  }

  ionViewWillLoad() {
    if(this.navParams.get('player').$key == this.afAuth.auth.currentUser.uid) this.currentUser = true;
    this.loadPlayer();
  }

  ngAfterViewInit() {
    this.bottomSlides = this.slides.toArray()[1];
    this.bottomSlides.lockSwipes(true);
  }

  ionViewDidLoad () {
    this.loadPlayer();
    this.loadMyTeams();
  }

  loadPlayer() {
    if (this.playerSub) this.playerSub.unsubscribe();
    this.playerSub = this.db.object('users/'+this.navParams.get('player').$key)
    .subscribe(data=>{
      this.player = data;
      if (!this.player.bg) this.player.bg = 'http://www.publicdomainpictures.net/pictures/50000/nahled/sunset-profile-background.jpg';
    })
  }

  loadMyTeams() {
    this.db.list('users/'+this.navParams.get('player').$key
   +'/myTeams').take(1).subscribe(data=>{
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
    this.bottomSlides.lockSwipes(false);
    this.bottomSlides.slideTo(event.value, 500);
    this.bottomSlides.lockSwipes(true);
  }

  slideChanged() {
    let currentIndex = this.bottomSlides.getActiveIndex();
    this.section = currentIndex +'';
  }

  addPlayer() {
    let modal = this.modlCtrl.create('AddPlayerToTeamPage', {player: this.player});
    modal.present();
  }

  ionViewWillLeave() {
    this.playerSub.unsubscribe();
  }

  openModal() {
    this.playerSub.unsubscribe();
    let modal = this.modlCtrl.create('EditProfilePage', {player: this.player});
    modal.present();
  }

  openTeam(team) {
    this.navCtrl.push('TeamPage', {team: team})
  }

}
