import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ChangePassword} from '../../../_models/ChangePassword';
import {ToastService} from '../../../_services/toast.service';
import {FormControl, Validators} from '@angular/forms';
import {ErrorMatcherService} from '../../../_services/error-matcher.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

  public changePasswordRequest: ChangePassword = new ChangePassword();
  public confirmPassword: string;

  public emailFormControl: FormControl = new FormControl('', [
    Validators.required,
  ]);
  public passwordFormControl: FormControl = new FormControl('', [
    Validators.required,
  ]);
  public newPasswordFormControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8)
  ]);
  public confirmPasswordFormControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(this.changePasswordRequest.newPassword),
  ]);
  public matcher: ErrorMatcherService = new ErrorMatcherService();

  constructor(private modalController: ModalController, private toastService: ToastService) { }

  public updateConfirmPasswordFormControl(): void {
    this.confirmPasswordFormControl = new FormControl('', [
      Validators.required,
      Validators.pattern(this.changePasswordRequest.newPassword),
    ]);
  }

  public dismissModalChangePassword(): void {
    this.modalController.dismiss();
  }

  public changePassword(): void {
    // erreur
    this.toastService.presentToastWrongRequest('Mot de passe incorrect');
    this.changePasswordRequest = new ChangePassword();

    // ok
    this.toastService.presentToastWrongRequest('Mot de passe modifié');
    // redirection
  }

  ngOnInit() {
  }

}
