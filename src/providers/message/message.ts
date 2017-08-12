import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";
import { Injectable } from '@angular/core';
import * as moment from 'moment';


/*
  Generated class for the MessageProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MessageProvider {

  constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase) {
  }

  sendMessage(msg, toUID) {
    return new Promise((resolve, reject) => {
      const date = moment.utc().format('YYYY-MM-DD HH:mm:ss');
      this.recordMostRecent(msg, toUID, date).then(() => {
        this.db.list('users/' + this.afAuth.auth.currentUser.uid + '/messages/' + toUID).push({
          sentBy: this.afAuth.auth.currentUser.uid,
          message: msg,
          date: date,
          timestamp: new Date().getTime(),
        }).then(() => {
          this.db.list('users/' + toUID + '/messages/' + this.afAuth.auth.currentUser.uid).push({
            sentBy: this.afAuth.auth.currentUser.uid,
            message: msg,
            date: date,
            timestamp: new Date().getTime(),
          }).then(() => {
            resolve(true)
          }).catch((err) => {
            reject(err)
          })
        }).catch((err) => {
          reject(err)
        })
      }).catch((err) => {
        reject(err);
      })
    })
  }

  recordMostRecent(msg, toUID, date) {
    return new Promise((resolve, reject) => {
      this.db.object('users/' + this.afAuth.auth.currentUser.uid + '/messages/' + toUID).update({
        recentMessage: msg,
        recentDate: date,
        timestamp: new Date().getTime(),
      }).then(() => {
        this.db.object('users/' + toUID + '/messages/' + this.afAuth.auth.currentUser.uid).update({
          recentMessage: msg,
          recentDate: date,
          timestamp: new Date().getTime(),
        }).then(() => {
          resolve(true)
        }).catch((err) => {
          reject(err)
        })
      }).catch((err) => {
        reject(err)
      })
    })
  }

}
