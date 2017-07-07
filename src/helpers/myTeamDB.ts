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
  teamPlayersSub: any
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
          resolve(data[0]);
        })
    })
  }

  getInfo(uid): Promise<any> {
    return new Promise(resolve => {
      const userInfo = this.db.object('users/'+uid);
      this.usrInfoSub = userInfo.subscribe(data => {
      resolve({
        name: data.name,
        position: data.position,
        username: data.originialUsername
      })
      this.usrInfoSub.unsubscribe();
      })
    })
  }

  getTeamPlayers(teamId): Promise<any> {
    return new Promise(resolve => {
      const teamPlayers = this.db.list('/teams/'+teamId+'/players/');
      let playersList: any[] = []
      this.teamPlayersSub = teamPlayers.subscribe(data => {
        resolve(data);
        this.teamPlayersSub.unsubscribe();
      })
    })
  }

  async getTeamPlayersWithInfo(teamId): Promise<any> {
    let teamPlayers;
    await this.getTeamPlayers(teamId).then(data => {
      teamPlayers = data;
    })
    let teamPlayersInfo: any[] = [];
    for (let i = 0; i < teamPlayers.length; i++) {
      await this.getInfo(teamPlayers[i].$key).then(data => {
        teamPlayersInfo.push({
          name: data.name,
          username: data.username,
          position: data.position,
          id: teamPlayers[i].$key
        });
      })
    }
    return new Promise(resolve => {
      resolve(teamPlayersInfo)
    })
  }

  unsubscribeUserInfo() {
    console.log("here")
    console.log(this.usrInfoSub);
    this.usrInfoSub.unsubscribe();
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
