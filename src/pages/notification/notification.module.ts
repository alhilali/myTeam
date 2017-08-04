import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationPage } from './notification';
import { ComponentsModule } from '../../components/components.module'
import { PipesModule } from "./../../pipes/pipes.module";

@NgModule({
  declarations: [
    NotificationPage,
  ],
  imports: [
    ComponentsModule,
    PipesModule,
    IonicPageModule.forChild(NotificationPage),
  ],
  exports: [
    NotificationPage
  ]
})
export class NotificationPageModule { }
