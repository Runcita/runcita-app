import { Component, OnInit } from '@angular/core';
import {FollowersPage} from "../followers/followers.page";
import {ModalController} from "@ionic/angular";
import {SettingsPage} from "../settings/settings.page";

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {

  constructor(private modalController: ModalController) { }

  public async modalSettings(): Promise<void> {
    const modal = await this.modalController.create({
      component: SettingsPage,
      swipeToClose: true
    });
    return await modal.present();
  }

  ngOnInit() {}

}
