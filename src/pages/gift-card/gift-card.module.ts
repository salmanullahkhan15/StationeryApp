import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GiftCardPage } from './gift-card';

@NgModule({
  declarations: [
    GiftCardPage,
  ],
  imports: [
    IonicPageModule.forChild(GiftCardPage),
  ],
})
export class GiftCardPageModule {}
