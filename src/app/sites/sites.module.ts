import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SitesPageRoutingModule } from './sites-routing.module';
import { MaterialModule } from '../material.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { SitesPage } from './sites.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    SitesPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [SitesPage]
})
export class SitesPageModule {}
