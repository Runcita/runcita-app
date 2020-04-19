import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ChangeEmail} from '../../../_models/ChangeEmail';
import {FormControl, Validators} from '@angular/forms';
import {ErrorMatcherService} from '../../../_services/error-matcher.service';
import {ToastService} from '../../../_services/toast.service';

@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.page.html',
  styleUrls: ['./change-email.page.scss'],
})
export class ChangeEmailPage implements OnInit {

  public changeEmailRequest: ChangeEmail = new ChangeEmail();

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
    this.changeEmailRequest = new ChangeEmail();

    // si c'est bon redirigé
    // this.presentToastWrongRequest('L\'email a bien etait changé');
  }

  ngOnInit() {
  }

}
