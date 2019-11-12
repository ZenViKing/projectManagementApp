import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User = {};

  constructor(private _restService: RestService, public router: Router) { }
}
