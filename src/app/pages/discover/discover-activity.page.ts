import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {CreateActivityPage} from "../create-activity/create-activity.page";

@Component({
  selector: 'app-discover',
  templateUrl: './discover-activity.page.html',
  styleUrls: ['./discover-activity.page.scss'],
})
export class DiscoverActivityPage implements OnInit {

  constructor(private modalController: ModalController) { }

  public async modalCreateActivity(): Promise<void> {
    const modal = await this.modalController.create({
      component: CreateActivityPage,
      swipeToClose: true
    });
    return await modal.present();
  }

  ngOnInit() {
  }

}
