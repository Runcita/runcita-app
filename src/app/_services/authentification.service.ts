import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../_models/User';
import {environment} from '../../environments/environment';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUser: User;
    private token: string;

    public jwtTokenKeyStorage: string = 'jwtToken';

    constructor(private http: HttpClient, private storage: Storage, private router: Router) {
    }

    public get currentUserValue(): User {
        return this.currentUser;
    }

    public get tokenValue(): string {
        return this.token;
    }

    public isAuthentificated(): boolean {
        return this.token !== undefined && this.currentUser !== undefined;
    }

    public authenticate(): Observable<any> {
        return this.http.get(`${environment.apiUrl}/auth/authenticate`);
    }

    public signin(email: string, password: string): Observable<string> {
        return this.http.post(`${environment.apiUrl}/auth/signin`, { email, password }, {responseType: 'text'})
            .pipe(map(token => {
                this.storage.set(this.jwtTokenKeyStorage, token);
                this.token = token;
                return token;
            }));
    }

    public loadCurrentUser(): Observable<User> {
        return this.http.get<User>(`${environment.apiUrl}/auth/me`)
            .pipe(map(user => {
                this.currentUser = user;
                return user;
            }));
    }

    public getJwtStorage(): Observable<boolean> {
        return new Observable(observer => {
            this.storage.get(this.jwtTokenKeyStorage).then(jwt => {
                if (jwt) {
                    this.token = jwt;
                    this.authenticate().subscribe(
                        () => {
                            // if token exists & is valid
                            observer.next();
                            observer.complete();
                        },
                        () => {
                            // if token exists & is not valid
                            this.removeJwtStorage().then(() => {
                                this.token = undefined;
                                observer.error();
                                observer.complete();
                            });
                        });
                } else {
                    // if token don't exists
                    observer.error();
                    observer.complete();
                }
            });
        });
    }

    private removeJwtStorage(): Promise<boolean> {
        return this.storage.remove(this.jwtTokenKeyStorage);
    }

    public logout(): void {
        this.removeJwtStorage().then(() => {
            this.router.navigate(['/login']);
        });
    }
}
