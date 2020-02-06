import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateamountrecordPage } from './updateamountrecord.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateamountrecordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateamountrecordPageRoutingModule {}
