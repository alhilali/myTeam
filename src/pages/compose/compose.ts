import { Post } from "./../../models/post";
import { MyTeamDB } from "./../../helpers/myTeamDB";
import { Component } from '@angular/core';
import {
  IonicPage, NavController, NavParams,
  ViewController, AlertController, ToastController
} from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import * as moment from 'moment';
import { CalendarController } from "ion2-calendar/dist";
/**
 * Generated class for the ComposePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-compose',
  templateUrl: 'compose.html',
})
export class ComposePage {
  composeForm: any;
  myTeams = []
  player: any
  post = {} as Post;
  date = new Date().toLocaleDateString()
  title: string = ''
  info: string = ''
  type: string = 'general';
  selectedTeam: any
  matchDate: any
  month: string = ''
  day: string = ''

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private view: ViewController,
    private _form: FormBuilder,
    private db: AngularFireDatabase,
    private teamDB: MyTeamDB,
    private calendarCtrl: CalendarController,
    private alertCtrl: AlertController,
    private toast: ToastController) {
    this.player = this.navParams.get('player');
    this.composeForm = _form.group({
      "title": ["",
        Validators.compose([Validators.maxLength(30),
        Validators.minLength(1),
        Validators.required])],
      "info": ["",
        Validators.compose([Validators.maxLength(300)])]
    })
    this.matchDate = moment().format('L')
    this.month = moment().format('MMM')
    this.day = moment().format('D')
  }

  async segmentChanged() {
    if (this.type == 'match') {
      await this.teamDB.getMyTeamsCaptain().then(data => {
        this.myTeams = data;
      })
    }
  }

  selectTeam(team) {
    this.selectedTeam = team;
  }

  openCalendar() {
    this.calendarCtrl.openCalendar({
      title: 'تاريخ المباراة',
      weekdaysTitle: ["الاحد", "الاثنين", "الثلاثاء", "الاربعاء", "الخميس", "الجمعة", "السبت"],
      cssClass: 'matchCalender',
      closeIcon: true,
      closeLabel: 'close',
      doneLabel: 'md-checkmark',
      doneIcon: true
    })
      .then((res: any) => {
        const selectedDate = new Date(res.date.time).toDateString();
        var momentDate = moment(selectedDate, 'ddd MMM D YYYY', 'en');
        this.matchDate = momentDate.format('L')
        this.month = momentDate.format('MMM')
        this.day = momentDate.format('D')
      })
      .catch(() => {
        console.log("error")
      })
  }

  submit() {
    if (this.type == 'match' && !this.selectedTeam) {
      this.showError()
      return;
    }
    this.post.by = this.player.$key;
    this.post.title = this.title;
    this.post.info = this.info;
    this.post.date = moment.utc().format('YYYY-MM-DD HH:mm:ss');
    this.post.type = this.type;
    this.post.timestamp = new Date().getTime();
    if (this.type == 'match') {
      this.post.teamID = this.selectedTeam.$key;
      this.post.matchDate = this.matchDate;
    }
    this.db.list('timeline/').push(this.post).then(() => {
      this.toast.create({
        message: 'تم الارسال بنجاح',
        duration: 2200,
        position: 'top'
      }).present();
      this.view.dismiss({ postDone: true });
    })
  }

  showError() {
    this.alertCtrl.create({
      title: 'خطأ',
      subTitle: 'يجب اختيار فريق',
      buttons: ['حسناً'],
    }).present();
  }

  closeModal() {
    this.view.dismiss({ postDone: false });
  }

}
