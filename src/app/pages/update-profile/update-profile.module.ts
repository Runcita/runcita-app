import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateProfilePageRoutingModule } from './update-profile-routing.module';

import { UpdateProfilePage } from './update-profile.page';
import {SearchCityPageModule} from "../search-city/search-city.module";
import {RunningLevelPageModule} from "../running-level/running-level.module";
import {MaterialModule} from "../../material.module";
import {MatDatepickerModule} from "@angular/material/datepicker";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        UpdateProfilePageRoutingModule,
        SearchCityPageModule,
        RunningLevelPageModule,
        MaterialModule,
        ReactiveFormsModule,
        MatDatepickerModule
    ],
    declarations: [UpdateProfilePage]
})
export class UpdateProfilePageModule {}
