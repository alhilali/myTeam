import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewMessagePage } from './new-message';

@NgModule({
  declarations: [
    NewMessagePage,
  ],
  imports: [
    IonicPageModule.forChild(NewMessagePage),
  ],
})
export class NewMessagePageModule {}
