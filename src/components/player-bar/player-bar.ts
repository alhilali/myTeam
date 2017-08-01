import { Component, Input } from '@angular/core';
import { MyTeamDB } from '../../helpers/myTeamDB';
/**
 * Generated class for the PlayerBarComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'player-bar',
  templateUrl: 'player-bar.html'
})
export class PlayerBarComponent {
  @Input('playerID') playerID: any;
  numMatches: number = 0
  userInfo = {}

  constructor(private teamDB: MyTeamDB) {
  }

  ngAfterViewInit() {
    Promise.resolve().then(() => {
      this.teamDB.getUserInfo(this.playerID).then(user => {
        this.userInfo = user;
      })
    });
  }
}
