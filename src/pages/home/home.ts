import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { GiftCardPage } from '../gift-card/gift-card';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.presentGiftCardModal()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');

  }

  presentGiftCardModal() {
    let giftCardModal = this.modalCtrl.create(GiftCardPage);
    giftCardModal.present();
  }

}
