import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { NameComponent } from './name';

@NgModule({
  declarations: [
    NameComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    NameComponent
  ]
})
export class UserNameComponentModule {}
