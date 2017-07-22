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
  }

  ngAfterViewInit () {
    Promise.resolve().then(() => {
      if (this.date) {
        if (this.day !== null && this.day == "true") this.formatedDate = moment(this.date, "MM/DD/YYYY").locale('ar-sa').format('dddd') + " "
        this.formatedDate += moment(this.date, "MM/DD/YYYY").locale('ar-sa').format('ll');
      } else {
        this.db.object('/matches/'+this.reqID).take(1).subscribe(data=>{
          if (this.day !== null && this.day == "true") this.formatedDate = moment(data.date, "MM/DD/YYYY").locale('ar-sa').format('dddd') + " "
          this.formatedDate += moment(data.date, "MM/DD/YYYY").locale('ar-sa').format('ll');
        })
      }
    });
  }

}
