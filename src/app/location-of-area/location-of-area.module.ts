import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationOfAreaPageRoutingModule } from './location-of-area-routing.module';
import { MaterialModule } from '../material.module';

import { LocationOfAreaPage } from './location-of-area.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    LocationOfAreaPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [LocationOfAreaPage]
})
export class LocationOfAreaPageModule {}
