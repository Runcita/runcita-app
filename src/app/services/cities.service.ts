import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {City} from "../models/City";

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private httpClient: HttpClient) {}

  getCities(city: string): Observable<Array<any>> {
    return this.httpClient.get<Array<any>>(`https://geo.api.gouv.fr/communes?nom=${city}&fields=nom,code,codesPostaux`)
  }
}
