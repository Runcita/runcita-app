import {Component, OnInit} from '@angular/core';
import {User} from '../../_models/User';
import {ModalController} from '@ionic/angular';
import {SearchCityPage} from '../search-city/search-city.page';
import {Profile} from "../../_models/Profile";
import {City} from "../../_models/City";
import {FormControl, Validators} from "@angular/forms";
import {ErrorMatcherService} from "../../services/error-matcher.service";
import {DateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})
export class AuthenticationPage implements OnInit {

  public user: User = Object.assign(new User(), {
    profile: Object.assign(new Profile(), {
      city: new City()
    })
  });
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
    Validators.pattern('^\\w+([\\.-]?\w+)*@\\w+([\.-]?\\w+)*(\\.\\w{2,3})+$'),
    Validators.minLength(2)
  ]);
  public passwordFormControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8)
  ]);
  public confirmPasswordFormControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(this.user.password),
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
  public confirmPassword: string = '';
  public choiceBirthday: Date;
  public customActionSheetOptions: object = {
    header: 'Selectionnez votre sexe',
  };

  constructor(public modalController: ModalController, private _adapter: DateAdapter<any>) { }

  public updateConfirmPasswordFormControl(): void {
    this.confirmPasswordFormControl = new FormControl('', [
      Validators.required,
      Validators.pattern(this.user.password),
    ]);
  }

  public signup(): void {
    this.user.profile.birthday = this.choiceBirthday.getTime();
    console.log(this.user);
  }

  public async modalSearchCity(): Promise<void> {
    const modal = await this.modalController.create({
      component: SearchCityPage,
      swipeToClose: true
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    this.user.profile.city = Object.assign(new City(), {
      name: data.city.name,
      code: data.city.code
    });
  }

  ngOnInit() {
    this._adapter.setLocale('fr');
  }
}
