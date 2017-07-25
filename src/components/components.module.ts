import { NgModule } from '@angular/core';
import {IonicModule}  from 'ionic-angular'
import { ProfilePicComponent } from './profile-pic/profile-pic'
import { DateComponent } from './date/date'
import { PostComponent } from './post/post'
import { ShrinkingSegmentHeader } from './shrinking-segment-header/shrinking-segment-header'
import { TeamCardComponent } from './team-card/team-card'
import { MatchItemComponent } from './match-item/match-item';
import { NameComponent } from './name/name';
@NgModule({
  declarations: [
    ProfilePicComponent,
    DateComponent,
    PostComponent,
    TeamCardComponent,
    MatchItemComponent,
    NameComponent,
    ShrinkingSegmentHeader],
  imports: [IonicModule],
  exports: [
    ProfilePicComponent,
    DateComponent,
    PostComponent,
    TeamCardComponent,
    MatchItemComponent,
    NameComponent,
    ShrinkingSegmentHeader]
})
export class ComponentsModule { }
