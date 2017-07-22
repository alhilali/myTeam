import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ProfilePicComponent } from './profile-pic';

@NgModule({
  declarations: [
    ProfilePicComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    ProfilePicComponent
  ]
})
export class ProfilePicComponentModule {}
