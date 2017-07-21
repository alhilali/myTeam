import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { DateComponent } from './date';

@NgModule({
  declarations: [
    DateComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    DateComponent
  ]
})
export class DateComponentModule {}
