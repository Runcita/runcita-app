import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {CitiesService} from '../../services/cities.service';
import {City} from "../../models/City";

@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.page.html',
  styleUrls: ['./search-city.page.scss'],
})
export class SearchCityPage implements OnInit {

  public cities: Array<City> = [];
  public search: string;

  constructor(public modalCtrl: ModalController, private apiCities: CitiesService) { }

  public dismissModalSearchCity(city: City): void {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true,
      'city': city
    });
  }

  public getCitiesByName(cityName: string): void {
    this.apiCities.getCities(cityName).subscribe(cities => {
      cities.forEach((city) => {
        this.cities.push(Object.assign(new City(), {
          name: city.nom,
          postalCodes: city.codesPostaux,
          code: city.code
        }));
      });
    });
  }

  ngOnInit() {
  }

}
