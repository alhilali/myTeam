import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { ToastController, } from 'ionic-angular';


/*
  Generated class for the MessageProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MessageProvider {

  constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase,
    private toast: ToastController) {
  }

  sendMessage(msg, toUID) {
    return new Promise((resolve, reject) => {
      const date = moment.utc().format('YYYY-MM-DD HH:mm:ss');
      this.recordMostRecent(msg, toUID, date).then(() => {
        this.db.list('users/' + this.afAuth.auth.currentUser.uid + '/messages/' + toUID).push({
          sentBy: this.afAuth.auth.currentUser.uid,
          message: msg,
          date: date,
          read: false,
          timestamp: new Date().getTime(),
        }).then((snap) => {
          this.db.object('users/' + toUID + '/messages/' + this.afAuth.auth.currentUser.uid + '/' + snap.key).set({
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
        read: true
      }).then(() => {
        this.db.object('users/' + toUID + '/messages/' + this.afAuth.auth.currentUser.uid).update({
          recentMessage: msg,
          recentDate: date,
          timestamp: new Date().getTime(),
          read: false
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

  markRead(toUID) {
    return new Promise((resolve, reject) => {
      this.db.object('users/' + this.afAuth.auth.currentUser.uid + '/messages/' + toUID).update({
        read: true
      }).then(() => {
        resolve(true)
      }).catch((err) => {
        reject(err)
      })
    })
  }

  markMsgRead(key, toUID) {
    return new Promise((resolve, reject) => {
      this.db.object('users/' + toUID + '/messages/' + this.afAuth.auth.currentUser.uid + '/' + key).update({
        read: true
      }).then(() => {
        resolve(true)
      }).catch((err) => {
        reject(err)
      })
    })
  }

  removeMessage(key) {
    return new Promise((resolve, reject) => {
      this.db.object('users/' + this.afAuth.auth.currentUser.uid + '/messages/' + key)
        .remove().then(() => {
          // show cofirmation
          this.toast.create({
            message: 'تم حذف الرسائل',
            duration: 2200,
            position: 'top',
            cssClass: 'failure'
          }).present();
          resolve(true)
        }).catch((err) => {
          reject(err)
        })
    })
  }

}
