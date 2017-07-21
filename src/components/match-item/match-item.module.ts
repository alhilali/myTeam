import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MatchItemComponent } from './match-item';

@NgModule({
  declarations: [
    MatchItemComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    MatchItemComponent
  ]
})
export class MatchItemComponentModule {}
