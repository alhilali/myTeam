import { Component, Input } from '@angular/core';
import * as moment from 'moment';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the MatchItemComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'date',
  templateUrl: 'date.html'
})
export class DateComponent {
  @Input('requestID') reqID: any;
  @Input('date') date: any;
  @Input('day') day: any;
  formatedDate: string = ""

  constructor(private db: AngularFireDatabase) {
    moment.updateLocale('en', {
      relativeTime: {
        future: 'in %s',
        past: '%s',
        s: 'Now',
        ss: '%ss',
        m: '1m',
        mm: '%dm',
        h: '1hr',
        hh: '%dh',
        d: '1d',
        dd: '%dd',
        M: '1mo',
        MM: '%dM',
        y: 'yr',
        yy: '%dY'
      }
    });
  }

  async ngAfterViewInit() {
    this.setData();
  }

  ngOnChanges() {
    this.setData();
  }

  async setData() {
    Promise.resolve().then(() => {
      if (this.date) {
        if (this.day !== null && this.day == "true") {
          this.formatedDate = moment(this.date, "MM/DD/YYYY").locale('ar-sa').format('dddd') + " "
          this.formatedDate += moment(this.date, "MM/DD/YYYY").locale('ar-sa').format('ll');
        }
        else {
          const momentDate = moment.utc(this.date, "YYYY-MM-DD HH:mm:ss").local().format("YYYY-MM-DD HH:mm:ss");
          this.formatedDate = moment(momentDate).fromNow();
        }
      } else if (this.reqID) {
        this.db.object('/matches/' + this.reqID).take(1).subscribe(data => {
          if (this.day !== null && this.day == "true") this.formatedDate = moment(data.date, "MM/DD/YYYY").locale('ar-sa').format('dddd') + " "
          this.formatedDate += moment(data.date, "MM/DD/YYYY").locale('ar-sa').format('ll');
        })
      }
    });
  }

}
