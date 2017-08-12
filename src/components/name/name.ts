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
    this.setData();
  }

  ngOnChanges() {
    this.setData();
  }

  async setData() {
    let name;
    if (this.type == 'user' && this.id) {
      await this.teamDB.getUserInfo(this.id).then(user => {
        name = user.originalUsername;
      })
    } else if (this.type == 'team' && this.id) {
      await this.teamDB.getTeamInfo(this.id).then(team => {
        name = team.name;
      })
    }
    Promise.resolve().then(() => {
      if (!name) this.name = 'غير متوفر'
      else this.name = name;
    });
  }
}
