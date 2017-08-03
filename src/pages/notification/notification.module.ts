import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationPage } from './notification';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    NotificationPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(NotificationPage),
  ],
  exports: [
    NotificationPage
  ]
})
export class NotificationPageModule { }
