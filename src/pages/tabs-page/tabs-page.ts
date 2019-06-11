import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { AboutPage } from '../about/about';
//import { MapPage } from '../map/map';
//import { SchedulePage } from '../schedule/schedule';
import { CartPage } from '../cart/cart';
import { HomePage } from '../home/home';
import { AccountPage } from '../account/account';
@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = HomePage;
  tab2Root: any = CartPage;
  tab3Root: any = AboutPage;
  tab4Root: any = AccountPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
