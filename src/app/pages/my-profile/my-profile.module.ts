import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyProfilePageRoutingModule } from './my-profile-routing.module';

import { MyProfilePage } from './my-profile.page';
import {ProfileModule} from "../../components/profile/profile.module";
import {SettingsPageModule} from "../settings/settings.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyProfilePageRoutingModule,
    ProfileModule,
    SettingsPageModule
  ],
    declarations: [MyProfilePage]
})
export class MyProfilePageModule {}
