import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';
// import { Router } from '@angular/router';
import { RestService } from './rest.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(private restService: RestService) {
        
    }

    login(user: User) {
        return this.restService.loginUser(user)
            .subscribe(data => {
                localStorage.setItem('currentUser', data.email);
                localStorage.setItem('fonctionUser', data.fonction);
                localStorage.setItem('tokenUser', data.token);
            });
    }

    logout() {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('fonctionUser');
        localStorage.removeItem('tokenUser');
    }
}
