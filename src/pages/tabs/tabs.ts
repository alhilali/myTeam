import { Component } from '@angular/core';

import { SearchPage } from '../search/search';
import { HomePage } from '../home/home';
import { MyTeamPage } from '../my-team/my-team'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MyTeamPage;
  tab3Root = SearchPage;

  constructor() {

  }
}
