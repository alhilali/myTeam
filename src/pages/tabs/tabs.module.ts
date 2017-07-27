import { TabsPage } from "./tabs";
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [TabsPage],
  imports: [
    IonicPageModule.forChild(TabsPage)
  ]
})
export class TabsPageModule { }
