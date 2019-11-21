import { Component, OnInit } from '@angular/core';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  token;

  constructor(private auth: AuthService) { 
    this.token = localStorage.getItem('tokenUser') || null;
  }

  ngOnInit() {
  }

  goLogout() {
    return this.auth.logout();
  }
}
