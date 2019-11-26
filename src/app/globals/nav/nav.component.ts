import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

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
    window.location.reload()
  }
}
