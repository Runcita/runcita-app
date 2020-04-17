import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RunningLevelPage } from './running-level.page';

const routes: Routes = [
  {
    path: '',
    component: RunningLevelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RunningLevelPageRoutingModule {}
