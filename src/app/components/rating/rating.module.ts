import {NgModule} from "@angular/core";
import {RatingComponent} from "./rating.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {IonicModule} from "@ionic/angular";

@NgModule({
    imports : [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    declarations : [RatingComponent],
    exports : [RatingComponent]
})
export class RatingModule{}
