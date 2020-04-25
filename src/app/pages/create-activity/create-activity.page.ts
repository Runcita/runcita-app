import { Component, OnInit } from '@angular/core';
import {City} from "../../_models/City";
import {ModalController} from "@ionic/angular";
import {Activity} from "../../_models/Activity";
import {RunningLevelPage} from "../running-level/running-level.page";
import {RunningLevel} from "../../_models/RunningLevel";
import {RunningType} from "../../_models/RunningType";
import {AuthenticationService} from "../../_services/authentification.service";
import {FormControl, Validators} from "@angular/forms";
import {ErrorMatcherService} from "../../_services/error-matcher.service";
import {SearchCityPage} from "../search-city/search-city.page";

@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.page.html',
  styleUrls: ['./create-activity.page.scss'],
})
export class CreateActivityPage implements OnInit {

  public activity: Activity = Object.assign(new Activity(), {
    runningLevel: new RunningLevel(),
    runningType: new RunningType(),
    organiser: this.authService.currentUserValue,
    city: (this.authService.currentUserValue.city === null) ? new City() : this.authService.currentUserValue.city
  });
  public choiceDate: Date;

  public runningLevelFormControl = new FormControl('', [
    Validators.required
  ]);
  public dateFormControl = new FormControl('', [
    Validators.required
  ]);
  public cityFormControl = new FormControl('', [
    Validators.required
  ]);
  public runningTypeFormControl = new FormControl('', [
    Validators.required
  ]);
  public matcher: ErrorMatcherService = new ErrorMatcherService();

  constructor(private modalController: ModalController, private authService: AuthenticationService) { }

  public dismissModalCreateActivity(): void {
    this.modalController.dismiss();
  }

  public createActivity() {
    this.activity.date = this.choiceDate.getTime();
    console.log(this.activity);
  }

  public async modalRunningLevel(): Promise<void> {
    const modal = await this.modalController.create({
      component: RunningLevelPage,
      swipeToClose: true
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    this.activity.runningLevel = Object.assign(new RunningLevel(), {
      id: data.runningLevel.id,
      name: data.runningLevel.name
    });
  }

  public async modalSearchCity(): Promise<void> {
    const modal = await this.modalController.create({
      component: SearchCityPage,
      swipeToClose: true
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    this.activity.city = Object.assign(new City(), {
      name: data.city.name,
      code: data.city.code
    });
  }

  public updateAfter(event) {
    this.activity.after = event.detail.checked;
  }

  ngOnInit() {
  }

}
