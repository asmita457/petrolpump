import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewcustomerPageRoutingModule } from './newcustomer-routing.module';

import { NewcustomerPage } from './newcustomer.page';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    NewcustomerPageRoutingModule
  ],
  declarations: [NewcustomerPage]
})
export class NewcustomerPageModule {}
