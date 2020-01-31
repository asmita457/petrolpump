import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationOfAreaPage } from './location-of-area.page';

const routes: Routes = [
  {
    path: '',
    component: LocationOfAreaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationOfAreaPageRoutingModule {}
