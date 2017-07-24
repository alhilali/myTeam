import { Component, Input } from '@angular/core';
import { MyTeamDB } from '../../helpers/myTeamDB';

/**
 * Generated class for the ProfilePicComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'profile-pic',
  templateUrl: 'profile-pic.html'
})
export class ProfilePicComponent {
  @Input('ID') id: any;
  @Input('className') className: any;
  @Input('type') type: any;
  @Input('url') url: any;
  profilePic: string = ''

  constructor(private teamDB: MyTeamDB) {
  }

  async ngAfterViewInit () {
    let info;
    if (this.type == 'user') {
      if (this.id) {
        await this.teamDB.getUserInfo(this.id).then(user=>{
          info = user;
        })
      }
    } else if (this.type == 'team') {
      if (this.id) {
        await this.teamDB.getTeamInfo(this.id).then(user=>{
          info = user;
        })
      }
    }
    Promise.resolve().then(() => {
      if (this.id && this.type == 'user' && info.profilePic) this.profilePic = info.profilePic;
      else if (this.id && this.type == 'team') this.profilePic = info.logo;
      else this.profilePic = this.url;
    });
  }
}
