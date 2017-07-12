import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPlayerToTeamPage } from './add-player-to-team';

@NgModule({
  declarations: [
    AddPlayerToTeamPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPlayerToTeamPage),
  ],
  exports: [
    AddPlayerToTeamPage
  ]
})
export class AddPlayerToTeamPageModule {}
