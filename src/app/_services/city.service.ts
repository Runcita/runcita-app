import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpClient: HttpClient) {}

  getCities(city: string): Observable<Array<any>> {
    return this.httpClient.get<Array<any>>(`https://geo.api.gouv.fr/communes?nom=${city}&fields=nom,code,codesPostaux`);
  }
}
