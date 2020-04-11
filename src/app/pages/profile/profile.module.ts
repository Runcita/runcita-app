import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import {RatingComponent} from '../../components/rating/rating.component';
import {UserProfileComponent} from '../../components/user-profile/user-profile.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule
  ],
    declarations: [ProfilePage, RatingComponent, UserProfileComponent]
})
export class ProfilePageModule {}
