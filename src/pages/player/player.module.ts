import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayerPage } from './player';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    PlayerPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(PlayerPage),
  ],
  exports: [
    PlayerPage
  ]
})
export class PlayerPageModule {}
