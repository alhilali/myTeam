import { ComponentsModule } from "./../../components/components.module";
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComposePage } from './compose';

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
export class ComposePageModule { }
