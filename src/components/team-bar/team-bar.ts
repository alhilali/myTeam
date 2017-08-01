import { Component, Input } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the TeamBarComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'team-bar',
  templateUrl: 'team-bar.html'
})
export class TeamBarComponent {
  @Input('teamID') teamID: any;
  playersNum: number = 0

  constructor(private db: AngularFireDatabase) {
  }

  ngAfterViewInit() {
    this.setData();
  }

  ngOnChanges() {
    this.setData();
  }

  setData() {
    Promise.resolve().then(() => {
      this.db.list('playersList/' + this.teamID).take(1).subscribe(data => {
        let count = 0;
        for (var i = 0; i < data.length; i++) {
          if (data[i].status == "enrolled") count++;
        }
        this.playersNum = count;
      })
    });
  }

}
