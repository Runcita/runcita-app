import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
import {ModalController} from '@ionic/angular';
import {SearchCityPage} from '../search-city/search-city.page';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})
export class AuthenticationPage implements OnInit {

  public user: User = new User();
  public confirmPassword: string = '';
  public choiceBirthday: string;
  public customActionSheetOptions: object = {
    header: 'Selectionnez votre sexe',
  };

  constructor(public modalController: ModalController) { }

  public signup(): void {
    let date = new Date(this.choiceBirthday);
    this.user.birthday = date.getTime();
    console.log(this.user);
  }

  public async modalSearchCity(): Promise<void> {
    const modal = await this.modalController.create({
      component: SearchCityPage,
      swipeToClose: true
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    this.user.city = data.city.name;
  }

  ngOnInit() {
  }
}
