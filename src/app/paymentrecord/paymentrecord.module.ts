import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentrecordPageRoutingModule } from './paymentrecord-routing.module';

import { PaymentrecordPage } from './paymentrecord.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentrecordPageRoutingModule
  ],
  declarations: [PaymentrecordPage]
})
export class PaymentrecordPageModule {}
