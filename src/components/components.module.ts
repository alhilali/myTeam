import { PlayerPostCardComponent } from "./player-post-card/player-post-card";
import { PlayerBarComponent } from "./player-bar/player-bar";
import { TeamBarComponent } from "./team-bar/team-bar";
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular'
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
    TeamBarComponent,
    PlayerBarComponent,
    PlayerPostCardComponent,
    ShrinkingSegmentHeader],
  imports: [IonicModule],
  exports: [
    ProfilePicComponent,
    DateComponent,
    PostComponent,
    TeamCardComponent,
    MatchItemComponent,
    NameComponent,
    TeamBarComponent,
    PlayerBarComponent,
    PlayerPostCardComponent,
    ShrinkingSegmentHeader]
})
export class ComponentsModule { }
