import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log("HEY");
        
        const currentUSer = localStorage.getItem('currentUser');
        if(currentUSer) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
    
}