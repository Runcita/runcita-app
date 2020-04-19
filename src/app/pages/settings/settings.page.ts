import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {ChangeEmailPage} from "../page-settings/change-email/change-email.page";
import {ChangePasswordPage} from "../page-settings/change-password/change-password.page";
import {DeleteAccountPage} from "../page-settings/delete-account/delete-account.page";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  public toggleDark: boolean = false;
  public toggleNotification: boolean = false;

  constructor(private modalController: ModalController) { }

  public dismissModalSettings(): void {
    this.modalController.dismiss();
  }

  public async modalChangeEmail(): Promise<void> {
    const modal = await this.modalController.create({
      component: ChangeEmailPage,
      swipeToClose: true
    });
    return await modal.present();
  }

  public async modalChangePassword(): Promise<void> {
    const modal = await this.modalController.create({
      component: ChangePasswordPage,
      swipeToClose: true
    });
    return await modal.present();
  }

  public async modaleDeleteAccount(): Promise<void> {
    const modal = await this.modalController.create({
      component: DeleteAccountPage,
      swipeToClose: true
    });
    return await modal.present();
  }

  changeDarkMode(event) {
    document.body.classList.toggle('dark', event.detail.checked);
  }

  ngOnInit() {
    this.toggleDark = document.body.classList.contains('dark');
  }
}
