import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';
import { User } from '../models/user.model';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    user: User;

    constructor(private restService: RestService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let currenUser = this.restService.loginUser(this.user)
        .subscribe(data => data);
        console.log(currenUser);
        throw new Error("Method not implemented.");
    }
}