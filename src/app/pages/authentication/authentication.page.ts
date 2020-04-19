import { Component, OnInit } from '@angular/core';
import {User} from '../../_models/User';
import {ModalController} from '@ionic/angular';
import {SearchCityPage} from '../search-city/search-city.page';
import {Profile} from "../../_models/Profile";
import {City} from "../../_models/City";

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
  public confirmPassword: string = '';
  public choiceBirthday: string;
  public customActionSheetOptions: object = {
    header: 'Selectionnez votre sexe',
  };

  constructor(public modalController: ModalController) { }

  public signup(): void {
    let date = new Date(this.choiceBirthday);
    this.user.profile.birthday = date.getTime();
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
  }
}
