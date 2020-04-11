import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {CitiesService} from "../../services/cities.service";

@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.page.html',
  styleUrls: ['./search-city.page.scss'],
})
export class SearchCityPage implements OnInit {

  public cities: any = [];
  public search: string;

  constructor(public modalCtrl: ModalController, private apiCities: CitiesService) { }

  dismissModal(value) {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true,
      'city': value
    });
  }

  input($event) {
    console.log($event);
  }

  public getCitiesByName(name): void {
    this.apiCities.getCities(name).subscribe(cities => {
      console.log(cities);
      for(const c of (cities as any)) {
        this.cities.push(c.nom);
      }
    });
  }

  ngOnInit() {
  }

}
