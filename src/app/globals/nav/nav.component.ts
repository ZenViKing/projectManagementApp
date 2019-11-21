import { Component, OnInit } from '@angular/core';
import { LoginComponent } from 'src/app/pages/login/login.component';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  loget: LoginComponent

  constructor() { }

  ngOnInit() {
  }
}
