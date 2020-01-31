import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InternetNotConnectedPageRoutingModule } from './internet-not-connected-routing.module';

import { InternetNotConnectedPage } from './internet-not-connected.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InternetNotConnectedPageRoutingModule
  ],
  declarations: [InternetNotConnectedPage]
})
export class InternetNotConnectedPageModule {}
