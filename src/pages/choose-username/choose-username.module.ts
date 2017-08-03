import { ChooseUsernamePage } from "./choose-username";
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    ChooseUsernamePage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseUsernamePage),
  ],
  exports: [
    ChooseUsernamePage
  ]
})
export class ChooseUsernamePageModule { }
