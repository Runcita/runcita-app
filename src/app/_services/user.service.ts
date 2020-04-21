import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {User} from "../_models/User";
import {HttpClient} from "@angular/common/http";
import {environment} from '../../environments/environment';

@Injectable({providedIn : 'root'})
export class UserService {

    constructor(private http: HttpClient) {}

    public getUserById(id: number): Observable<User> {
        return this.http.get<User>(`${environment.apiUrl}/api/users/${id}`);
    }
}
