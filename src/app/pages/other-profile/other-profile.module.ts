import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtherProfilePageRoutingModule } from './other-profile-routing.module';

import { OtherProfilePage } from './other-profile.page';
import {ProfileModule} from "../../components/profile/profile.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtherProfilePageRoutingModule,
    ProfileModule
  ],
  declarations: [OtherProfilePage],
})
export class OtherProfilePageModule {}
