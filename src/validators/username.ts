import { FormControl } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class UsernameValidator {
  valid = false;
  constructor(
    public db: AngularFireDatabase) {
  }

  checkUsername(control: FormControl) {
    return new Promise(resolve => {
      const usernames = this.db.list('usernames/', { preserveSnapshot: true});
      usernames.subscribe(snap => {
        let found = false;
        let counter = 0;
        const len = snap.length;
        snap.forEach(snap => {
          let currentUsername : string = snap.key;
          if (control.value.toLowerCase() == currentUsername.toLowerCase()) {
            found = true;
            resolve({
              "username taken": true
            });
          }
          counter++;
          if (counter == len && (!found)) resolve(null);
        })
      })
    })
  }

  checkValidUsername(control: FormControl) {
    return new Promise(resolve => {
      const usernames = this.db.list('usernames/', { preserveSnapshot: true});
      usernames.subscribe(snap => {
        let found = false;
        let counter = 0;
        const len = snap.length;
        snap.forEach(snap => {
          let currentUsername : string = snap.key;
          if (control.value.toLowerCase() == currentUsername.toLowerCase()) {
            found = true;
            resolve(null);
          }
          counter++;
          if (counter == len && (!found)) {
            resolve({
              "message": "اسم المستخدم غير صحيح، الرجاء التأكد."
            });
          } else if (counter == len && (found)) {
            resolve(null);
          }
        })
      })
    })
  }

}
