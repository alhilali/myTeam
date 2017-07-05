import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { EditProfilePage } from '../edit-profile/edit-profile';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    private modal: ModalController) {

  }

  openModal() {
    const myModal = this.modal.create(EditProfilePage);
    myModal.present();
  }

}
