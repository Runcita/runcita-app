import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitializationPage } from './initialization.page';

const routes: Routes = [
  {
    path: '',
    component: InitializationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InitializationPageRoutingModule {}
