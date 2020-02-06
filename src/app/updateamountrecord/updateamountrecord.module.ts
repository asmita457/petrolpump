import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateamountrecordPageRoutingModule } from './updateamountrecord-routing.module';

import { UpdateamountrecordPage } from './updateamountrecord.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateamountrecordPageRoutingModule
  ],
  declarations: [UpdateamountrecordPage]
})
export class UpdateamountrecordPageModule {}
