import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,
   ViewController, ActionSheetController } from 'ionic-angular';
import firebase from 'firebase';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the EditTeamPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-edit-team',
  templateUrl: 'edit-team.html',
})
export class EditTeamPage {
  team: any = {}
  teamSub: any

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private view: ViewController,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private actionSheetCtrl: ActionSheetController,
    private camera: Camera) {
  }

  ionViewDidLoad() {
    this.teamSub = this.db.object('teams/'+this.navParams.get('team').$key)
    .subscribe(data=>{
      this.team = data;
    })
  }

  update(team) {
    this.db.object('teams/'+this.navParams.get('team').$key)
    .update({name: team.name, city: team.city})
  }

  changePhoto(type) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: true,
      targetWidth: 800,
      targetHeight: 500
    }
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     let base64Image = 'data:image/jpeg;base64,' + imageData;

     let storageRef = firebase.storage().ref();
     const filename = this.navParams.get('team').$key;
     const imageRef = storageRef.child(`${filename}/${type}.jpg`)

     imageRef.putString(base64Image, firebase.storage.StringFormat.DATA_URL)
     .then((snap)=>{
       const ref = this.db.object('/teams/'+this.navParams.get('team').$key)
       if (type == 'logo') ref.update({logo: snap.downloadURL})
       else ref.update({bg: snap.downloadURL})
     })
    }, (err) => {
     // Handle error
    });
  }

  deletePic(type) {
    let storageRef = firebase.storage().ref();
    const filename = this.navParams.get('team').$key;
    const imageRef = storageRef.child(`${filename}/${type}.jpg`)
    imageRef.delete().then(()=> {
      if (type == 'logo') {
        this.db.object('/teams/'+this.navParams.get('team').$key+'/logo')
        .set('http://playerleague.it/uploads/club/242d7e5ff1bd143ca11fd4d4b0dd1f8a.png');
      }
      else {
        this.db.object('/teams/'+this.navParams.get('team').$key+'/bg')
        .remove();
      }

    }).catch((error)=> {
      // Uh-oh, an error occurred!
      console.log(error)
    });
  }

  presentActionSheet(type) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'إعدادات الفريق',
      buttons: [
        {
          text: 'تغيير الصورة',
          handler: () => {
            this.changePhoto(type);
          }
        },{
          text: 'حذف',
          role: 'destructive',
          handler: () => {
            this.deletePic(type);
          }
        },{
          text: 'إلغاء',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    })
    actionSheet.present()
  }

  closeModal() {
    this.teamSub.unsubscribe();
    this.view.dismiss();
  }

}
