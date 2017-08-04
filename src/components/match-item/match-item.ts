import { Component, Input } from '@angular/core';
import * as moment from 'moment';
import { MyTeamDB } from '../../helpers/myTeamDB';

/**
 * Generated class for the MatchItemComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'match-item',
  templateUrl: 'match-item.html',
  providers: [MyTeamDB]
})
export class MatchItemComponent {
  @Input('home') home: any;
  @Input('away') away: any;
  homeName: string
  awayName: string

  constructor(private teamDB: MyTeamDB) {
  }

  async ngAfterViewInit() {
    let homeName, awayName;
    await this.teamDB.getTeamInfo(this.home).then(data => {
      homeName = data.name;
    })
    await this.teamDB.getTeamInfo(this.away).then(data => {
      awayName = data.name;
    })
    Promise.resolve().then(() => {
      if (!homeName) this.homeName = 'غير متوفر';
      else this.homeName = homeName;
      if (!awayName) this.awayName = 'غير متوفر'
      else this.awayName = awayName;
    });
  }

}
