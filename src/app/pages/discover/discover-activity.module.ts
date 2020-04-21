import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscoverActivityPageRoutingModule } from './discover-activity-routing.module';

import { DiscoverActivityPage } from './discover-activity.page';
import {CreateActivityPageModule} from "../create-activity/create-activity.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscoverActivityPageRoutingModule,
    CreateActivityPageModule
  ],
  declarations: [DiscoverActivityPage]
})
export class DiscoverActivityPageModule {}
