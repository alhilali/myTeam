import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PostComponent } from './post';

@NgModule({
  declarations: [
    PostComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    PostComponent
  ]
})
export class PostComponentModule {}
