import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Request } from '../models/request';

@Injectable()
export class MyTeamDB {
  reqSub: any
  usersSub: any
  usrInfoSub: any
  infoSub: any
  constructor(
    public db: AngularFireDatabase) {
  }

  findUID(username: string) {
    const users = this.db.list('users/', { preserveSnapshot: true});
    return new Promise(resolve => {
        this.usersSub = users.subscribe(snap => {
        let found = false;
        let counter = 0;
        const len = snap.length;
        snap.forEach(snap => {
          const uid = snap.key;
          const info = this.db.object('users/'+uid+'/info/');
          this.infoSub = info.subscribe(data=>{
            if (username.toLowerCase() == data.username.toLowerCase()) {
              found = true;
              this.usersSub.unsubscribe();
              resolve(uid);
            }
            counter++;
            if (counter == len && (!found)) {
              this.usersSub.unsubscribe();
              this.infoSub.unsubscribe();
              resolve(null);
            }
          })
        })
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
            teamId: data.key,
            dateRequested: data.dateRequested
          })
          counter++;
          if (counter == len) {
            resolve(requestsList);
            this.reqSub.unsubscribe();
          }
          else if (len == 0) {
            resolve(null);
            this.reqSub.unsubscribe();
          }
        })
      })
    })
  }

  unsubscribeAll() {
    if(this.reqSub) this.reqSub.unsubscribe();
    if(this.usersSub) this.usersSub.unsubscribe();
    if(this.usrInfoSub) this.usrInfoSub.unsubscribe();
    if(this.infoSub) this.infoSub.unsubscribe();
  }

}
