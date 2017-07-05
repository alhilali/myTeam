import { FormControl } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class UsernameValidator {
  valid = false;
  usersSub: any
  constructor(
    public db: AngularFireDatabase) {
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
