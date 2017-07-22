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
  @Input('userID') userID: any;
  profilePic: string = ''

  constructor(private teamDB: MyTeamDB) {
  }

  async ngAfterViewInit () {
    let userInfo;
    await this.teamDB.getUserInfo(this.userID).then(user=>{
      userInfo = user;
    })
    Promise.resolve().then(() => {
      if (userInfo.profilePic) this.profilePic = userInfo.profilePic;
      else this.profilePic = 'http://www.gscadvisory.com/wp-content/uploads/2016/04/blank.jpg';
    });
  }
}
