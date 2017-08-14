import { DirectivesModule } from "./../../directives/directives.module";
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostPage } from './post';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    PostPage,
  ],
  imports: [
    ComponentsModule,
    DirectivesModule,
    IonicPageModule.forChild(PostPage),
  ],
  exports: [
    PostPage
  ]
})
export class PostPageModule { }
