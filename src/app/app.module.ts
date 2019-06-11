import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { DetailPage } from '../pages/detail/detail';
import { CartPage } from '../pages/cart/cart';
import { TeamPage } from '../pages/team/team';
import { ProfilePage } from '../pages/profile/profile';
import { AccountPage } from '../pages/account/account';
//import { PopoverPage } from '../pages/about-popover/about-popover';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
//import { ScheduleFilterPage } from '../pages/schedule-filter/schedule-filter';
import { SignupPage } from '../pages/signup/signup';
//import { SpeakerDetailPage } from '../pages/speaker-detail/speaker-detail';
//import { SpeakerListPage } from '../pages/speaker-list/speaker-list';
import { TabsPage } from '../pages/tabs-page/tabs-page';
import { SupportPage } from '../pages/support/support';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';
import { GiftCardPage } from '../pages/gift-card/gift-card';


@NgModule({
  declarations: [
    ConferenceApp,
    AboutPage,
    LoginPage,
    HomePage,
    //PopoverPage,
    // SchedulePage,
    SignupPage,
    //SpeakerDetailPage,
    //SpeakerListPage,
    TabsPage,
    SupportPage,
    DetailPage,
    CartPage,
    TeamPage,
    ProfilePage,
    AccountPage,
    GiftCardPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(ConferenceApp, {}, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs-page' },
        //{ component: SchedulePage, name: 'Schedule', segment: 'schedule' },
        //{ component: SpeakerListPage, name: 'SpeakerList', segment: 'speakerList' },
        // { component: SpeakerDetailPage, name: 'SpeakerDetail', segment: 'speakerDetail/:speakerId' },
        { component: AboutPage, name: 'About', segment: 'about' },
        { component: HomePage, name: 'HomePage', segment: 'support' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: SignupPage, name: 'SignupPage', segment: 'signup' },
        { component: DetailPage, name: 'DetailPage', segment: 'detail' },
        { component: CartPage, name: 'CartPage', segment: 'cart' },
        { component: TeamPage, name: 'TeamPage', segment: 'team' },
        { component: ProfilePage, name: 'ProfilePage', segment: 'profile' },
        { component: AccountPage, name: 'AccountPage', segment: 'account' }
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    AboutPage,
    LoginPage,
    HomePage,
    //PopoverPage,
    //SchedulePage,
    SignupPage,
    // SpeakerDetailPage,
    // SpeakerListPage,
    TabsPage,
    SupportPage,
    DetailPage,
    CartPage,
    TeamPage,
    ProfilePage,
    AccountPage,
    GiftCardPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConferenceData,
    UserData,
    InAppBrowser,
    SplashScreen
  ]
})
export class AppModule { }
