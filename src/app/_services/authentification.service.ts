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

    constructor(private http: HttpClient, private storage: Storage, private router: Router) {
        this.token = JSON.parse(localStorage.getItem('jwtToken'));
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

    public checkSignin(): void {
        console.log('check signin');
        this.storage.get('jwt').then(jwt => {
            console.log('jwt', jwt);
            if (jwt) { // check if jwt is expired
                this.http.get(`${environment.apiUrl}/authenticate`).subscribe(
                    () => {
                        this.loadCurrentUser().subscribe(() => {
                            this.token = jwt;
                            this.router.navigate(['/home']);
                        });
                    },
                    () => this.logout());
            } else {
                this.logout();
            }
        });
    }

    public signin(email: string, password: string): Observable<string> {
        return this.http.post(`${environment.apiUrl}/auth/signin`, { email, password }, {responseType: 'text'})
            .pipe(map(token => {
                this.storage.set('jwtToken', token);
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

    public logout(): void {
        this.storage.remove('jwtToken').then(() =>
            this.currentUser = undefined
        );
    }
}
