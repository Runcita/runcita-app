import { Component, OnInit } from '@angular/core';
import {ModalController, ToastController} from "@ionic/angular";
import {ChangeEmailRequest} from "../../../models/ChangeEmailRequest";
import {ToastService} from "../../../services/toast.service";

@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.page.html',
  styleUrls: ['./change-email.page.scss'],
})
export class ChangeEmailPage implements OnInit {

  public changeEmailRequest: ChangeEmailRequest = new ChangeEmailRequest();

  constructor(private modalController: ModalController, private toastService: ToastService) { }

  public dismissModalChangeEmail(): void {
    this.modalController.dismiss();
  }

  public changeEmail(): void {
    console.log(this.changeEmailRequest);
    // erreur
    this.toastService.presentToastWrongRequest('Mot de passe incorect');
    this.changeEmailRequest.newEmail = '';
    this.changeEmailRequest.password = '';

    // si c'est bon redirigé
    // this.presentToastWrongRequest('L\'email a bien etait changé');
  }

  ngOnInit() {
  }

}
