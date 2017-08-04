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
  profilePic: string = ''

  constructor(private teamDB: MyTeamDB) {
  }

  async ngAfterViewInit() {
    this.setData();
  }

  ngOnChanges() {
    this.setData();
  }

  async setData() {
    let pic;
    if (this.type == 'user' && this.id) {
      await this.teamDB.getUserInfo(this.id).then(user => {
        pic = user.profilePic;
      })
    } else if (this.type == 'team' && this.id) {
      await this.teamDB.getTeamInfo(this.id).then(user => {
        pic = user.logo;
      })
    }
    Promise.resolve().then(() => {
      if (!pic) this.profilePic = 'http://playerleague.it/uploads/club/242d7e5ff1bd143ca11fd4d4b0dd1f8a.png';
      else this.profilePic = pic;
    });
  }

}
