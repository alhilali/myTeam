import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamPage } from './team';

@NgModule({
  declarations: [
    TeamPage,
  ],
  imports: [
    IonicPageModule.forChild(TeamPage),
  ],
  exports: [
    TeamPage
  ]
})
export class TeamPageModule {}
