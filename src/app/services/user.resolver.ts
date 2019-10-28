import { Injectable } from "@angular/core";
import { RestService } from './rest.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';

@Injectable(
    
    { providedIn:'root'}
    
)

export class UserResolver implements Resolve<User> {
    constructor(private _restService: RestService) { }
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<User> | Promise<User> {
            return this._restService.getUserByid(route.params['id']).pipe(map(user => user));
        }
}