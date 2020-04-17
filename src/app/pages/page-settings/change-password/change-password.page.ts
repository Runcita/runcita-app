import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {ChangePasswordRequest} from "../../../models/ChangePasswordRequest";
import {ToastService} from "../../../services/toast.service";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

  public changePasswordRequest: ChangePasswordRequest = new ChangePasswordRequest();
  public confirmPassword: string;

  constructor(private modalController: ModalController, private toastService: ToastService) { }

  public dismissModalChangePassword(): void {
    this.modalController.dismiss();
  }

  public changePassword(): void {
    console.log(this.changePasswordRequest);
    // erreur
    this.toastService.presentToastWrongRequest('Mot de passe incorrect');
    this.changePasswordRequest.newPassword = '';
    this.changePasswordRequest.oldPassword = '';
    this.confirmPassword = '';

    // ok
    this.toastService.presentToastWrongRequest('Mot de passe modifié');
    // redirection
  }

  ngOnInit() {
  }

}
