import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComposePage } from './compose';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    ComposePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ComposePage),
  ],
  exports: [
    ComposePage
  ]
})
export class ComposePageModule {}
