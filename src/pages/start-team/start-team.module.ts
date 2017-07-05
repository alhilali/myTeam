import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StartTeamPage } from './start-team';

@NgModule({
  declarations: [
    StartTeamPage,
  ],
  imports: [
    IonicPageModule.forChild(StartTeamPage),
  ],
  exports: [
    StartTeamPage
  ]
})
export class StartTeamPageModule {}
