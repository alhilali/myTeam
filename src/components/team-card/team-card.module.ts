import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TeamCardComponent } from './team-card';
@NgModule({
  declarations: [
    TeamCardComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    TeamCardComponent
  ]
})
export class TeamCardComponentModule {}
