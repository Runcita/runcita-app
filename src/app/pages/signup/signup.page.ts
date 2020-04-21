import {Component, OnInit} from '@angular/core';
import {ModalController, ToastController} from '@ionic/angular';
import {SearchCityPage} from '../search-city/search-city.page';
import {City} from '../../_models/City';
import {FormControl, Validators} from '@angular/forms';
import {ErrorMatcherService} from '../../_services/error-matcher.service';
import {DateAdapter} from '@angular/material/core';
import {Signup} from '../../_models/Signup';
import {User} from '../../_models/User';
import {AuthenticationService} from '../../_services/authentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  public loadingSignup: boolean;
  public signup: Signup = Object.assign(new Signup(), {
    user: Object.assign(new User(), {
      city: new City()
    })
  });
  public confirmPassword: string = '';
  public choiceBirthday: Date;

  public nameFormControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[A-Za-zÀ-ÖØ-öø-ÿ-]+'),
    Validators.minLength(2)
  ]);
  public firstNameFormControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[A-Za-zÀ-ÖØ-öø-ÿ-]+'),
    Validators.minLength(2)
  ]);
  public emailFormControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$'),
  ]);
  public passwordFormControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8)
  ]);
  public confirmPasswordFormControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(this.signup.password),
  ]);
  public cityFormControl = new FormControl('', [
    Validators.required,
  ]);
  public sexeFormControl = new FormControl('', [
    Validators.required
  ]);
  public birthdayFormControl = new FormControl('', [
    Validators.required
  ]);
  public matcher: ErrorMatcherService = new ErrorMatcherService();

  constructor(public modalController: ModalController, private authenticationService: AuthenticationService, private toastController: ToastController, private router: Router, private adapter: DateAdapter<any>) { }

  public updateConfirmPasswordFormControl(): void {
    this.confirmPasswordFormControl = new FormControl('', [
      Validators.required,
      Validators.pattern(this.signup.password),
    ]);
  }

  public sendSignup(): void {
    this.signup.user.birthday = this.choiceBirthday.getTime();
    this.loadingSignup = true;
    this.authenticationService.signup(this.signup)
        .subscribe(
            () => {
              this.authenticationService.loadCurrentUser().subscribe(() => {
                this.router.navigate(['/home']);
                this.loadingSignup = false;
              });
            },
            () => {
              this.presentErrorSignupFailed();
              this.loadingSignup = false;
            });
  }

  private async presentErrorSignupFailed(): Promise<void> {
    const toast = await this.toastController.create({
      message: 'Erreur lors de l\'inscription',
      duration: 3000,
      position: 'bottom',
      color: 'danger',
      keyboardClose: true,
    });
    await toast.present();
  }

  public async modalSearchCity(): Promise<void> {
    const modal = await this.modalController.create({
      component: SearchCityPage,
      swipeToClose: true
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    this.signup.user.city = Object.assign(new City(), {
      name: data.city.name,
      code: data.city.code
    });
  }

  ngOnInit() {
    this.adapter.setLocale('fr');
  }
}
