import { Component, OnInit } from '@angular/core';
import {City} from "../../_models/City";
import {ModalController} from "@ionic/angular";
import {RunningLevel} from "../../_models/RunningLevel";

@Component({
  selector: 'app-running-level',
  templateUrl: './running-level.page.html',
  styleUrls: ['./running-level.page.scss'],
})
export class RunningLevelPage implements OnInit {

  constructor(public modalController: ModalController) { }

  public dismissModalRunningLevel(nameRunningLevel: string, idRunningLevel: number): void {
    this.modalController.dismiss({
      runningLevel: Object.assign(new RunningLevel(), {name: nameRunningLevel, id: idRunningLevel})
    });
  }

  ngOnInit() {
  }

}
