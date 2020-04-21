import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscoverActivityPage } from './discover-activity.page';

const routes: Routes = [
  {
    path: '',
    component: DiscoverActivityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscoverActivityPageRoutingModule {}
