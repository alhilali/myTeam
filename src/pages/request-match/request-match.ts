import { Component } from '@angular/core';
import {
  IonicPage, NavController, NavParams,
  ViewController, ToastController
} from 'ionic-angular';
import { MyTeamDB } from '../../helpers/myTeamDB'
import { CalendarController } from "ion2-calendar/dist";
import * as moment from 'moment';
import { FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the RequestMatchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-request-match',
  templateUrl: 'request-match.html',
})
export class RequestMatchPage {
  selectedTeam: any
  myTeams: any[] = []
  date: any
  day: any
  time: number
  stadium: string
  awayTeam: any
  dateFormated: any
  matchForm: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public view: ViewController,
    private teamDB: MyTeamDB,
    private _form: FormBuilder,
    public calendarCtrl: CalendarController,
    private toast: ToastController) {
    this.matchForm = this._form.group({
      "selectedTeam": ["", Validators.required],
      "time": ["", Validators.required],
      "stadium": ["", Validators.required]
    })
    this.awayTeam = navParams.get('team');

    let _date;
    if (navParams.get('givenDate')) _date = moment(navParams.get('givenDate'), 'MM/DD/YYYY');
    else _date = moment()

    this.date = _date.format('L');
    this.day = _date.format('ddd')
    this.dateFormated = _date.locale('ar-sa').format('ll') + ' '
      + _date.locale('ar-sa').format('dddd');
  }

  async ionViewDidLoad() {
    await this.teamDB.getMyTeamsCaptain().then(data => {
      this.myTeams = data;
    })
  }

  openCalendar() {
    let _daysConfig = [
      {
        date: new Date(2018, 8, 25),
        subTitle: 'vs Alhilal',
        marked: true
      }
    ];

    this.calendarCtrl.openCalendar({
      title: 'تاريخ المباراة',
      weekdaysTitle: ["الاحد", "الاثنين", "الثلاثاء", "الاربعاء", "الخميس", "الجمعة", "السبت"],
      cssClass: 'matchCalender',
      closeIcon: true,
      closeLabel: 'close',
      doneLabel: 'md-checkmark',
      doneIcon: true,
      daysConfig: _daysConfig
    })
      .then((res: any) => {
        const selectedDate = new Date(res.date.time).toDateString();
        var momentDate = moment(selectedDate, 'ddd MMM D YYYY', 'en');
        this.date = momentDate.format('L')
        this.day = momentDate.format('dddd');
        this.dateFormated = momentDate.locale('ar-sa').format('ll') + ' '
          + momentDate.locale('ar-sa').format('dddd');
      })
      .catch(() => {
        console.log("error")
      })
  }

  sendRequest() {
    this.teamDB.sendMatchRequest({
      fromUID: this.selectedTeam.captain,
      toUID: this.awayTeam.captain,
      homeTeam: this.selectedTeam.$key,
      awayTeam: this.awayTeam.$key,
      date: this.date,
      day: this.day,
      time: this.time,
      stadium: this.stadium
    });
    // Succesful toast
    this.toast.create({
      message: 'تم إرسال طلب المباراة بنجاح',
      duration: 2200,
      position: 'top'
    }).present();
    this.view.dismiss();
  }

  closeModel() {
    this.view.dismiss();
  }

}
