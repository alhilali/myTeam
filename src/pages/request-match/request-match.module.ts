import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestMatchPage } from './request-match';

@NgModule({
  declarations: [
    RequestMatchPage,
  ],
  imports: [
    IonicPageModule.forChild(RequestMatchPage),
  ],
  exports: [
    RequestMatchPage
  ]
})
export class RequestMatchPageModule { }
