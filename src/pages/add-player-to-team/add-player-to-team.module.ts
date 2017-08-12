import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPlayerToTeamPage } from './add-player-to-team';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    AddPlayerToTeamPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(AddPlayerToTeamPage),
  ],
  exports: [
    AddPlayerToTeamPage
  ]
})
export class AddPlayerToTeamPageModule { }
