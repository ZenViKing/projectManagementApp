import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';
import { User } from '../models/user.model';
import { LoginComponent } from '../pages/login/login.component';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    user: User;

    constructor(private restService: RestService, private login: LoginComponent) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // let currentUser = this.login.returnCurrentUser;
        // console.log(currentUser.token);
        // if (currentUser && currentUser.token) {
        //     req = req.clone({
        //         setHeaders: { 
        //             Authorization: `Bearer ${currentUser.token}`
        //         }
        //     });
        // }
        return next.handle(req);
        
    }
}