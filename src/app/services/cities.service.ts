import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {City} from "../models/City";

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private httpClient: HttpClient) {}

  getCities(city: string): Array<City> {
    let cities: Array<City> = [];
    this.httpClient.get<Array<any>>(`https://geo.api.gouv.fr/communes?nom=${city}&fields=nom,code,codesPostaux`).subscribe(citiesRes => {
      citiesRes.forEach((cityRes) => {
        cities.push(Object.assign(new City(), {
          name : cityRes.nom,
          postalCodes: cityRes.codesPostaux,
          code : cityRes.code
        }));
      });
    });
    return cities;
  }
}
