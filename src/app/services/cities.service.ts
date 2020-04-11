import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private httpClient: HttpClient) {}

  getCities(search): Observable<any> {
    return this.httpClient.get(`https://geo.api.gouv.fr/communes?nom=${search}`);
  }
}
