import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeEmailPageRoutingModule } from './change-email-routing.module';

import { ChangeEmailPage } from './change-email.page';
import {MaterialModule} from "../../../material.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ChangeEmailPageRoutingModule,
        MaterialModule,
        ReactiveFormsModule
    ],
  declarations: [ChangeEmailPage]
})
export class ChangeEmailPageModule {}
