import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { AuthService } from 'src/app/services/auth.service';
// import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { RestService } from 'src/app/services/rest.service';
import { MatListIconCssMatStyler } from '@angular/material';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  user: User;
  // user: User = {
  //   email: "chou@mail.be",
  //   password: "chouchou"
  // };

  // constructor(private authentificate: AuthService, private router: Router) {
  //   // if(this.authentificate.currentUserValue) {
  //   //   this.router.navigate(['/home']);
  //   // }
  // }
  constructor(private restService: RestService) {
    this.restService.loginUser(this.user)
                            .subscribe(data => console.log(data));
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required])
    })
    
  }
  submitForm() {
    // this.user.email = email;
  }

}
