import { FormControl } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { MyTeamDB } from '../helpers/myTeamDB'

@Injectable()
export class UsernameValidator {
  valid = false;
  usersSub: any
  constructor(
    public db: AngularFireDatabase, private teamDB: MyTeamDB) {
  }

  checkUsername(control: FormControl) {
    return new Promise(resolve => {
      let found = false;
      const users = this.db.list('usernames/', {
        query: {
          orderByKey: true,
          equalTo: control.value.toLowerCase()
        }
      }).subscribe(data => {
        if (data.length > 0) {
          resolve({
            "username taken": true
          });
        } else resolve(null);
      })
    })
  }

  async checkTeam(control: FormControl, playersList) {
    let found = false;
    let count = 0;
    console.log(playersList)
    for(let player in playersList) {
      let playerInfo;
      await this.teamDB.getInfo(player).then(data=>{
        playerInfo = data
      })
      count++;
      if (playerInfo.username == control.value.toLowerCase()) {
        found = true
        return new Promise(resolve => {
          resolve({
            "message": "اللاعب متواجد في الفريق حالياً"
          });
        })
      }
    }
    return new Promise(resolve => {
      resolve(null);
    })

  }

  checkValidUsername(control: FormControl) {
    return new Promise(resolve => {
      let found = false;
      const users = this.db.list('usernames/', {
        query: {
          orderByKey: true,
          equalTo: control.value.toLowerCase()
        }
      }).subscribe(data => {
        if (data.length > 0) {
          resolve(null);
        } else {
          resolve({
            "message": "اسم المستخدم غير صحيح، الرجاء التأكد."
          });
        };
      })
    })
  }

}
