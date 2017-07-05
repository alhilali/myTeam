import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Request } from '../models/request';
import { Team } from '../models/team';

@Injectable()
export class MyTeamDB {
  reqSub: any
  usersSub: any
  usrInfoSub: any
  teamInfoSub: any
  constructor(
    public db: AngularFireDatabase) {
  }

  findUID(username: string) {
    return new Promise(resolve => {
        let found = false;
        const users = this.db.list('users/', {
          query: {
            orderByChild: 'username',
            equalTo: username
          }
        });
        this.usersSub = users.subscribe(data => {
          this.usersSub.unsubscribe();
          console.log(data[0]);
          resolve(data[0]);
        })
    })
  }

  getInfo(uid): Promise<any> {
    const userInfo = this.db.object('users/'+uid+'/info');
    return new Promise(resolve => {
        this.usrInfoSub = userInfo.subscribe(data => {
        resolve({
          name: data.name,
          position: data.position,
          username: data.username
        })
        this.usrInfoSub.unsubscribe();
      })
    })
  }

  getRequests(uid): Promise<any> {
    let requestsList: Request[] = [];
    const requests = this.db.list('users/'+uid+'/requests/');
    return new Promise(resolve => {
        this.reqSub = requests.subscribe(snap => {
          requestsList = [];
          let counter = 0;
          const len = snap.length;
          snap.forEach(data=> {
            requestsList.push({
              teamId: data.$key,
              dateRequested: data.dateRequested,
              name: data.name
            })
            counter++;
            if (counter == len) {
              this.reqSub.unsubscribe();
              resolve(requestsList);
            }
            else if (len == 0) {
              this.reqSub.unsubscribe();
              resolve(null);
            }
          })
      })
    })
  }

  getTeamInfo(teamId): Promise<any> {
    const teamInfo = this.db.object('teams/'+teamId);
    return new Promise(resolve => {
        this.teamInfoSub = teamInfo.subscribe(data => {
        this.teamInfoSub.unsubscribe();
        resolve(data);
      })
    })
  }

  ionViewWillLeave() {
    this.unsubscribeAll();
  }

  unsubscribeAll() {
    if(this.reqSub) this.reqSub.unsubscribe();
    if(this.usrInfoSub) this.usrInfoSub.unsubscribe();
    if(this.usersSub) this.usersSub.unsubscribe();
    if(this.teamInfoSub) this.teamInfoSub.unsubscribe();
  }

}
