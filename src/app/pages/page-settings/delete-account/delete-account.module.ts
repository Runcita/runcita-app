import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteAccountPageRoutingModule } from './delete-account-routing.module';

import { DeleteAccountPage } from './delete-account.page';
import {MaterialModule} from "../../../material.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DeleteAccountPageRoutingModule,
        MaterialModule,
        ReactiveFormsModule
    ],
  declarations: [DeleteAccountPage]
})
export class DeleteAccountPageModule {}
