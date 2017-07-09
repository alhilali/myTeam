import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class MyTeamDB {
  reqSub: any
  usersSub: any
  public usrInfoSub: any
  teamInfoSub: any
  teamPlayersSub: any
  teammInfoSub: any
  myTeamsSub: any
  usernamesSub: any
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

  findEmail(username): Promise<any> {
    if(this.usernamesSub) this.usernamesSub.unsubscribe();
    return new Promise(resolve => {
      let found = false;
      const users = this.db.list('usernames/', {
        query: {
          orderByKey: true,
          equalTo: username.toLowerCase()
        }
      });
      this.usernamesSub = users.subscribe(data => {
        if (data[0]) resolve(data[0].email);
        else resolve(null)
        this.usernamesSub.unsubscribe();
      })
    })
  }

  getInfo(uid): Promise<any> {
    if(this.usrInfoSub) this.usrInfoSub.unsubscribe();
    return new Promise(resolve => {
      const userInfo = this.db.object('users/'+uid);
        this.usrInfoSub = userInfo.subscribe(data => {
          resolve(data);
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
        teamPlayersInfo.push(data);
      })
    }
    return new Promise(resolve => {
      resolve(teamPlayersInfo)
    })
  }

  getMyTeamsIds(userId): Promise<any> {
    if (this.myTeamsSub) this.myTeamsSub.unsubscribe();
    return new Promise(resolve => {
      const myTeams = this.db.list('/users/'+userId+'/myTeams/');
      this.myTeamsSub = myTeams.subscribe(data => {
        resolve(data);
        this.myTeamsSub.unsubscribe();
      })
    })
  }

  async getMyTeams(userId): Promise<any> {
    if(this.myTeamsSub) this.myTeamsSub.unsubscribe();
    return new Promise(resolve => {
      let found = false;
      console.log(userId)
      const teams = this.db.list('teams/', {
        query: {
          orderByChild: userId,
          equalTo: true
        }
      });
      this.myTeamsSub = teams.subscribe(data => {
        console.log(data)
        this.myTeamsSub.unsubscribe();
      })
    })
  }

  getRequestsId(userId): Promise<any> {
    if (this.reqSub) this.reqSub.unsubscribe();
    return new Promise(resolve => {
      const myTeams = this.db.list('/users/'+userId+'/requests/');
      this.reqSub = myTeams.subscribe(data => {
        resolve(data);
        this.reqSub.unsubscribe();
      })
    })
  }

  async getRequests(userId): Promise<any> {
    let requests;
    await this.getRequestsId(userId).then(data => {
      requests = data;
    })
    let myRequestsInfo: any[] = [];
    let i;
    for (i = 0; i < requests.length; i++) {
      await this.gettTeamInfo(requests[i].$key).then(data => {
        myRequestsInfo.push(data);
      })
      if (i == requests.length-1) {
        return new Promise(resolve => {
          resolve(myRequestsInfo)
        })
      }
    }
  }

  getTeamInfo(teamId): Promise<any> {
    if (this.teamInfoSub) this.teamInfoSub.unsubscribe();
    const teamInfo = this.db.object('teams/'+teamId);
    return new Promise(resolve => {
      this.teamInfoSub = teamInfo.subscribe(data => {
        resolve(data);
        this.teamInfoSub.unsubscribe();
      })
    })
  }

  gettTeamInfo(teamId): Promise<any> {
    if (this.teammInfoSub) this.teammInfoSub.unsubscribe();
    const teamInfo = this.db.object('teams/'+teamId);
    return new Promise(resolve => {
      this.teammInfoSub = teamInfo.subscribe(data => {
        resolve(data);
        this.teammInfoSub.unsubscribe();
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
    if(this.teamPlayersSub) this.teamPlayersSub.unsubscribe();
    if(this.myTeamsSub) this.myTeamsSub.unsubscribe();
    if(this.teammInfoSub) this.teammInfoSub.unsubscribe();
  }

}
