import { Injectable } from '@angular/core';
// import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    machin;
    constructor(private restService: RestService, private router: Router) {
    }

    login(user: User) {
        return this.restService.loginUser(user)
            .subscribe(
                data => {
                    localStorage.setItem('currentUser', data.email);
                    localStorage.setItem('fonctionUser', data.fonction);
                    localStorage.setItem('tokenUser', data.token);
                    
                }
            )
    }

    logout() {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('fonctionUser');
        localStorage.removeItem('tokenUser');
    }
}
