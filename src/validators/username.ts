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
      this.db.list('usernames/', {
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

  checkEditUsername(control: FormControl, currentUsername) {
    return new Promise(resolve => {
      this.db.list('usernames/', {
        query: {
          orderByKey: true,
          equalTo: control.value.toLowerCase()
        }
      }).subscribe(data => {
        if (data.length > 0 && currentUsername != data[0].$key) {
          resolve({
            "username taken": true
          });
        } else resolve(null);
      })
    })
  }

  async checkTeam(control: FormControl, teamId) {
    let user;
    await this.teamDB.findUID(control.value.toLowerCase()).then(data => {
      user = data;
    })
    return new Promise(resolve => {
      if (user) {
        this.db.list('playersList/' + teamId, {
          query: {
            orderByChild: 'uid',
            equalTo: user.$key
          }
        }).take(1).subscribe(data => {
          if (data.length > 0) {
            if (data[0].status == 'enrolled') resolve({ "message": "اللاعب متواجد في الفريق حالياً" })
            else resolve({ "message": "اللاعب لم يقبل الإضافة بعد" })
          }
          else resolve(null);
        })
      } else {
        resolve(null)
      }
    })
  }

  checkValidUsername(control: FormControl) {
    return new Promise(resolve => {
      this.db.list('usernames/', {
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
