import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import {AuthGuard} from '../../_helpers/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () => import('../my-profile/my-profile.module').then(m => m.MyProfilePageModule),
            canActivate: [AuthGuard]
          }
        ]
      },
      {
        path: 'discover',
        children: [
          {
            path: '',
            loadChildren: () => import('../discover/discover-activity.module').then(m => m.DiscoverActivityPageModule),
            canActivate: [AuthGuard]
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule),
            canActivate: [AuthGuard]
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home/profile',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/profile',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
