import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsPageRoutingModule } from './settings-routing.module';

import { SettingsPage } from './settings.page';
import {DeleteAccountPageModule} from "../page-settings/delete-account/delete-account.module";
import {ChangePasswordPageModule} from "../page-settings/change-password/change-password.module";
import {ChangeEmailPageModule} from "../page-settings/change-email/change-email.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsPageRoutingModule,
    DeleteAccountPageModule,
    ChangePasswordPageModule,
    ChangeEmailPageModule
  ],
  declarations: [SettingsPage]
})
export class SettingsPageModule {}
