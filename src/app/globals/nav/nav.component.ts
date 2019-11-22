import { Component, OnInit } from '@angular/core';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/services/authGuard';
import { TokenInterceptor } from 'src/app/services/token.service';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  token;

  constructor(private auth: AuthService, private router: Router) {
    this.token = localStorage.getItem('tokenUser');
    
  }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
