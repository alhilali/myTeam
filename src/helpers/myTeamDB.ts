import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
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
  constructor(public db: AngularFireDatabase,
    private afAuth: AngularFireAuth) {
  }

  findUID(username: string) {
    return new Promise(resolve => {
      const users = this.db.list('users/', {
        query: {
          orderByChild: 'username',
          equalTo: username
        }
      });
      this.usersSub = users.subscribe(data => {
        if (data && data.length > 0) resolve(data[0]);
        else resolve(null)
        this.usersSub.unsubscribe();
      })
    })
  }

  findEmail(username): Promise<any> {
    if (this.usernamesSub) this.usernamesSub.unsubscribe();
    return new Promise(resolve => {
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

  getUserInfo(uid): Promise<any> {
    return new Promise(resolve => {
      const userInfo = this.db.object('users/' + uid)
        .take(1).subscribe(data => {
          resolve(data);
        })
    })
  }

  getTeamPlayers(teamId): Promise<any> {
    return new Promise(resolve => {
      const teamPlayers = this.db.list('/teams/' + teamId + '/players/');
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
      await this.getUserInfo(teamPlayers[i].$key).then(data => {
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
      const myTeams = this.db.list('/users/' + userId + '/myTeams/');
      this.myTeamsSub = myTeams.subscribe(data => {
        resolve(data);
        this.myTeamsSub.unsubscribe();
      })
    })
  }

  getMyTeams(): Promise<any> {
    return new Promise(resolve => {
      let myTeams = []
      this.db.list('users/' + this.afAuth.auth.currentUser.uid
        + '/myTeams').take(1).subscribe(data => {
          if (data.length == 0) resolve(null);
          let i = 0;
          for (i = 0; i < data.length; i++) {
            this.db.object('teams/' + data[i].teamId).take(1).subscribe(teamInfo => {
              myTeams.push(teamInfo)
            })
            if (i == data.length - 1) resolve(myTeams)
          }
        })
    })
  }

  getMyTeamsCaptain(): Promise<any> {
    return new Promise(resolve => {
      let myTeams = []
      const teams = this.db.list('teams/', {
        query: {
          orderByChild: 'captain',
          equalTo: this.afAuth.auth.currentUser.uid
        }
      });
      teams.take(1).subscribe(data => {
        if (data.length == 0) resolve(null);
        let i = 0;
        for (i = 0; i < data.length; i++) {
          this.db.object('teams/' + data[i].$key).take(1).subscribe(teamInfo => {
            myTeams.push(teamInfo)
          })
          if (i == data.length - 1) resolve(myTeams)
        }
      })
    })
  }

  getRequestsId(userId): Promise<any> {
    if (this.reqSub) this.reqSub.unsubscribe();
    return new Promise(resolve => {
      const myTeams = this.db.list('/users/' + userId + '/requests/');
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
      if (i == requests.length - 1) {
        return new Promise(resolve => {
          resolve(myRequestsInfo)
        })
      }
    }
  }

  getTeamInfo(teamId): Promise<any> {
    return new Promise(resolve => {
      this.db.object('teams/' + teamId)
        .take(1).subscribe(data => {
          resolve(data);
        })
    })
  }

  gettTeamInfo(teamId): Promise<any> {
    if (this.teammInfoSub) this.teammInfoSub.unsubscribe();
    const teamInfo = this.db.object('teams/' + teamId);
    return new Promise(resolve => {
      this.teammInfoSub = teamInfo.subscribe(data => {
        resolve(data);
        this.teammInfoSub.unsubscribe();
      })
    })
  }

  sendRequestToPlayer(playerID, teamID) {
    // Add request to player
    this.db.object('/users/' + playerID + '/requests/' + teamID)
      .set({
        teamId: teamID,
        dateRequested: new Date().toDateString()
      });

    // Add player to playersList temporary
    const playersList = this.db.object('/playersList/' + teamID + '/' + playerID);
    playersList.set({ uid: playerID, status: 'pending' });
  }

  async checkTeamPlayers(teamId, playerID) {
    return new Promise(resolve => {
      this.db.list('playersList/' + teamId, {
        query: {
          orderByChild: 'uid',
          equalTo: playerID
        }
      }).take(1).subscribe(data => {
        if (data.length > 0) resolve({ "message": "اللاعب متواجد في الفريق حالياً" })
        else resolve(null);
      })
    })
  }

  sendMatchRequest(matchInfo) {
    const ref = this.db.list("/matches/");
    ref.push(matchInfo)
  }

  getTeamHomeGames(teamID) {
    return new Promise(resolve => {
      let games: any[] = []
      const ref = this.db.list("/matches/", {
        query: {
          orderByChild: 'homeTeam',
          equalTo: teamID
        }
      }).take(1).subscribe(request => {
        if (request.length == 0) resolve(null)
        for (let i = 0; i < request.length; i++) {
          if (request[i].status != 'pending') {
            this.db.object('teams/' + request[i].awayTeam)
              .take(1).subscribe(data => {
                games.push({ requestInfo: request[i], teamInfo: data })
              })
          }
          if (i == request.length - 1) resolve(games);
        }
      })
    })
  }

  getTeamAwayGames(teamID) {
    return new Promise(resolve => {
      let games: any[] = []
      const ref = this.db.list("/matches/", {
        query: {
          orderByChild: 'awayTeam',
          equalTo: teamID
        }
      }).take(1).subscribe(request => {
        if (request.length == 0) resolve(null)
        for (let i = 0; i < request.length; i++) {
          if (request[i].status != 'pending') {
            this.db.object('teams/' + request[i].awayTeam)
              .take(1).subscribe(data => {
                games.push({ requestInfo: request[i], teamInfo: data })
              })
          }
          if (i == request.length - 1) resolve(games);
        }
      })
    })
  }

  getAllGames(teamID) {
    return new Promise(resolve => {
      let games: any[] = []
      const ref = this.db.list("/matches/")
        .take(1).subscribe(request => {
          if (request.length == 0) resolve(null)
          for (let i = 0; i < request.length; i++) {
            if (request[i].status != 'pending' && request[i].homeTeam == teamID) {
              this.db.object('teams/' + request[i].awayTeam)
                .take(1).subscribe(data => {
                  games.push({ requestInfo: request[i], teamInfo: data, home: true })
                })
            }
            if (request[i].status != 'pending' && request[i].awayTeam == teamID) {
              this.db.object('teams/' + request[i].homeTeam)
                .take(1).subscribe(data => {
                  games.push({ requestInfo: request[i], teamInfo: data, home: false })
                })
            }
            if (i == request.length - 1) resolve(games);
          }
        })
    })
  }

  getAllPosts() {
    return new Promise(resolve => {
      const ref = this.db.list("timeline/", {
        query: {
          orderByChild: 'timestamp'
        }
      })
        .take(1).subscribe(posts => {
          resolve(posts)
        })
    })
  }

  getPosts(type) {
    return new Promise(resolve => {
      const ref = this.db.list("timeline/", {
        query: {
          orderByChild: 'timestamp'
        }
      })
        .take(1).subscribe(posts => {
          let postsArray: any[] = [];
          for (var i = 0; i < posts.length; i++) {
            var postInfo = posts[i];
            if (postInfo.type == type) postsArray.push(postInfo)

            if (i == posts.length - 1) resolve(postsArray)
          }
        })
    })
  }

  getCommentsNum(postID) {
    return new Promise(resolve => {
      const ref = this.db.list('timeline/' + postID + '/comments/')
        .take(1).subscribe(comments => {
          resolve(comments.length)
        })
    })
  }

  ionViewWillLeave() {
    this.unsubscribeAll();
  }

  unsubscribeAll() {
    if (this.reqSub) this.reqSub.unsubscribe();
    if (this.usrInfoSub) this.usrInfoSub.unsubscribe();
    if (this.usersSub) this.usersSub.unsubscribe();
    if (this.teamInfoSub) this.teamInfoSub.unsubscribe();
    if (this.teamPlayersSub) this.teamPlayersSub.unsubscribe();
    if (this.myTeamsSub) this.myTeamsSub.unsubscribe();
    if (this.teammInfoSub) this.teammInfoSub.unsubscribe();
  }

}
