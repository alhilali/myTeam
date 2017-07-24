import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import * as moment from 'moment';
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
  player: any
  date = new Date().toLocaleDateString()
  title: string = ''
  info: string = ''

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private view: ViewController,
    private _form: FormBuilder,
    private db: AngularFireDatabase) {
      this.player = this.navParams.get('player');
      this.composeForm = _form.group({
        "title": ["",
        Validators.compose([Validators.maxLength(30),
        Validators.minLength(1),
        Validators.required])],
        "info": ["",
        Validators.compose([Validators.maxLength(150)])]
      })
  }

  ionViewDidLoad() {
  }

  submit() {
    let time = moment().format("HH:mm:ss");
    let date = moment().format("L");
    this.db.list('timeline/').push({
      by: this.player.$key,
      title: this.title,
      info: this.info,
      date: date,
      time: time,
      timestamp: new Date().getTime()
    }).then(()=>{
      this.view.dismiss();
    })
  }

  closeModal() {
    this.view.dismiss();
  }

}
