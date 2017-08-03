import { Component, Input } from '@angular/core';
import { MyTeamDB } from '../../helpers/myTeamDB';

/**
 * Generated class for the UserNameComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'name',
  templateUrl: 'name.html'
})
export class NameComponent {
  @Input('ID') id: any;
  @Input('type') type: any;
  name: string = ''

  constructor(private teamDB: MyTeamDB) {
  }

  async ngAfterViewInit() {
    let info;
    if (this.type == 'user' && this.id) {
      await this.teamDB.getUserInfo(this.id).then(user => {
        info = user;
      })
    } else if (this.type == 'team' && this.id) {
      await this.teamDB.getTeamInfo(this.id).then(team => {
        info = team;
      })
    }
    Promise.resolve().then(() => {
      if (this.type == 'user') this.name = info.originalUsername + "@";
      if (this.type == 'team') this.name = info.name;
    });
  }

}
