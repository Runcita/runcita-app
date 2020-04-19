import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthenticationService} from '../_services/authentification.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.authenticationService.tokenValue) {
            console.log('jwt interceptor', this.authenticationService.tokenValue);
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.authenticationService.tokenValue}`
                }
            });
        }
        return next.handle(request);
    }
}
