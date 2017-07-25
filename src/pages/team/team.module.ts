import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamPage } from './team';
import { ShrinkingSegmentHeader } from '../../components/shrinking-segment-header/shrinking-segment-header';
import { ProfilePicComponent } from '../../components/profile-pic/profile-pic';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    TeamPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(TeamPage),
  ],
  exports: [
    TeamPage
  ]
})
export class TeamPageModule {}
