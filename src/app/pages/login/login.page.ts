import {Component, OnInit} from '@angular/core';
import {User} from '../../_models/User';
import {AuthenticationService} from '../../_services/authentification.service';
import {Router} from '@angular/router';
import {LoadingController, ToastController} from '@ionic/angular';
import {FormControl, Validators} from '@angular/forms';
import {ErrorMatcherService} from '../../_services/error-matcher.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user: User = new User();
  public loadingSignin: boolean;

  public emailFormControl: FormControl = new FormControl('', [
    Validators.required,
  ]);
  public passwordFormControl: FormControl = new FormControl('', [
    Validators.required,
  ]);
  public matcher: ErrorMatcherService = new ErrorMatcherService();

  constructor(private router: Router, private authenticationService: AuthenticationService, private toastController: ToastController, private loadingController: LoadingController) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  public signin(): void {
    this.loadingSignin = true;
    this.authenticationService.signin(this.user.email, this.user.password)
        .subscribe(
            () => {
              this.authenticationService.loadCurrentUser().subscribe(() => {
                this.router.navigate(['/home']);
                this.loadingSignin = false;
              });
            },
            () => {
              this.presentErrorAuthentificationFailed();
              this.loadingSignin = false;
            });
  }

  private async presentErrorAuthentificationFailed(): Promise<void> {
    const toast = await this.toastController.create({
      message: 'L\'email ou le mot de passe est incorrect.',
      duration: 2000,
      position: 'bottom',
      color: 'red',
      keyboardClose: true,
    });
    await toast.present();
  }

  ngOnInit() {
  }

}
