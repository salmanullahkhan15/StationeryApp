import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { DetailPage } from '../detail/detail';
import { ProfilePage } from '../profile/profile';
import { TeamPage } from '../team/team';
import { SupportPage } from '../support/support';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  login()
  {
  	this.navCtrl.push(LoginPage);
  }
  signup()
  {
  	this.navCtrl.push(SignupPage);
  }
  store()
  {
  	this.navCtrl.push(SupportPage);
  }
  detail()
  {
  	this.navCtrl.push(DetailPage);
  }
  profile()
  {
  	this.navCtrl.push(ProfilePage);
  }
  team()
  {
  	this.navCtrl.push(TeamPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

}
