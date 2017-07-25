import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatchPage } from './match';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    MatchPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(MatchPage),
  ],
  exports: [
    MatchPage
  ]
})
export class MatchPageModule {}
