import {NgModule} from '@angular/core';
import {ProfileComponent} from './profile.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {RatingModule} from '../rating/rating.module';
import {FollowersPageModule} from '../../pages/followers/followers.module';
import {UpdateProfilePageModule} from '../../pages/update-profile/update-profile.module';
import {CardActivityComponent} from '../card-activity/card-activity.component';


@NgModule({
    imports : [
        CommonModule,
        FormsModule,
        IonicModule,
        RatingModule,
        FollowersPageModule,
        UpdateProfilePageModule
    ],
    declarations: [ProfileComponent, CardActivityComponent],
    exports : [ProfileComponent]
})
export class ProfileModule {}
