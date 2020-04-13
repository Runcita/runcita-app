import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthenticationPageRoutingModule } from './authentication-routing.module';

import { AuthenticationPage } from './authentication.page';
import {IntroductionPageModule} from '../introduction/introduction.module';
import {SearchCityPageModule} from "../search-city/search-city.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AuthenticationPageRoutingModule,
        IntroductionPageModule,
        SearchCityPageModule
    ],
  declarations: [AuthenticationPage]
})
export class AuthenticationPageModule {}