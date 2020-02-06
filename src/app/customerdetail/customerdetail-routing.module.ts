import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerdetailPage } from './customerdetail.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerdetailPageRoutingModule {}
