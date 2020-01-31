import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InternetNotConnectedPage } from './internet-not-connected.page';

const routes: Routes = [
  {
    path: '',
    component: InternetNotConnectedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InternetNotConnectedPageRoutingModule {}
