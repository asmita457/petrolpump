import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerdetailPageRoutingModule } from './customerdetail-routing.module';
import { CallNumber } from '@ionic-native/call-number/ngx';

import { CustomerdetailPage } from './customerdetail.page';
import { SMS } from '@ionic-native/sms/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerdetailPageRoutingModule
  ],
  providers:[SMS,CallNumber],
  declarations: [CustomerdetailPage]
})
export class CustomerdetailPageModule {}
