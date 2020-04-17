import { Component, OnInit } from '@angular/core';
import {City} from "../../models/City";
import {ModalController} from "@ionic/angular";
import {RunningLevel} from "../../models/RunningLevel";

@Component({
  selector: 'app-running-level',
  templateUrl: './running-level.page.html',
  styleUrls: ['./running-level.page.scss'],
})
export class RunningLevelPage implements OnInit {

  constructor(public modalController: ModalController) { }

  public dismissModalRunningLevel(runningLevel: string): void {
    this.modalController.dismiss({
      runningLevel: Object.assign(new RunningLevel(), {name: runningLevel})
    });
  }

  ngOnInit() {
  }

}
