import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthenticationPageRoutingModule } from './authentication-routing.module';

import { AuthenticationPage } from './authentication.page';
import {IntroductionPageModule} from '../introduction/introduction.module';
import {SearchCityPageModule} from "../search-city/search-city.module";
import {MaterialModule} from "../../material.module";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MAT_DATE_LOCALE} from "@angular/material/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AuthenticationPageRoutingModule,
        IntroductionPageModule,
        SearchCityPageModule,
        MaterialModule,
        ReactiveFormsModule,
        MatDatepickerModule
    ],
    providers: [
        {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
    ],
    declarations: [AuthenticationPage]
})
export class AuthenticationPageModule {}
