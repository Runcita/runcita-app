import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroductionPageRoutingModule } from './introduction-routing.module';

import { IntroductionPage } from './introduction.page';
import {LoginComponent} from '../../components/login/login.component';
import {SignupComponent} from '../../components/signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroductionPageRoutingModule
  ],
  exports: [
    SignupComponent
  ],
  declarations: [IntroductionPage, LoginComponent, SignupComponent]
})
export class IntroductionPageModule {}
