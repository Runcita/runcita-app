import { Component, OnInit } from '@angular/core';
import {ModalController, ToastController} from "@ionic/angular";
import {ChangeEmailRequest} from "../../../_models/ChangeEmailRequest";
import {ToastService} from "../../../services/toast.service";
import {FormControl, Validators} from "@angular/forms";
import {ErrorMatcherService} from "../../../services/error-matcher.service";

@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.page.html',
  styleUrls: ['./change-email.page.scss'],
})
export class ChangeEmailPage implements OnInit {

  public changeEmailRequest: ChangeEmailRequest = new ChangeEmailRequest();

  public emailFormControl: FormControl = new FormControl('', [
    Validators.required,
  ]);
  public passwordFormControl: FormControl = new FormControl('', [
    Validators.required,
  ]);
  public newEmailFormControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^\\w+([\\.-]?\w+)*@\\w+([\.-]?\\w+)*(\\.\\w{2,3})+$'),
  ]);
  public matcher: ErrorMatcherService = new ErrorMatcherService();

  constructor(private modalController: ModalController, private toastService: ToastService) { }

  public dismissModalChangeEmail(): void {
    this.modalController.dismiss();
  }

  public changeEmail(): void {
    // erreur
    this.toastService.presentToastWrongRequest('Mot de passe incorect');
    this.changeEmailRequest = new ChangeEmailRequest();

    // si c'est bon redirigé
    // this.presentToastWrongRequest('L\'email a bien etait changé');
  }

  ngOnInit() {
  }

}
