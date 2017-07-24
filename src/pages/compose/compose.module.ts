import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComposePage } from './compose';

@NgModule({
  declarations: [
    ComposePage,
  ],
  imports: [
    IonicPageModule.forChild(ComposePage),
  ],
  exports: [
    ComposePage
  ]
})
export class ComposePageModule {}
