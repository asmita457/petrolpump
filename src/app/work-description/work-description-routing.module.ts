import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkDescriptionPage } from './work-description.page';

const routes: Routes = [
  {
    path: '',
    component: WorkDescriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkDescriptionPageRoutingModule {}
