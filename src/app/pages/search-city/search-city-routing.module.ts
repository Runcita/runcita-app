import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchCityPage } from './search-city.page';

const routes: Routes = [
  {
    path: '',
    component: SearchCityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchCityPageRoutingModule {}
