import {NgModule} from "@angular/core";
import {ProfileComponent} from './profile.component';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {IonicModule} from "@ionic/angular";
import {RatingModule} from "../rating/rating.module";

@NgModule({
    imports : [
        CommonModule,
        FormsModule,
        IonicModule,
        RatingModule
    ],
    declarations : [ProfileComponent],
    exports : [ProfileComponent]
})
export class ProfileModule{}
