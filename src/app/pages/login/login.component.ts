import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { AuthService } from 'src/app/services/auth.service';
// import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { RestService } from 'src/app/services/rest.service';
import { MatListIconCssMatStyler } from '@angular/material';
import { tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  user: User;
 
  constructor(private authService: AuthService, private router: Router) {
    
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required])
    })
    
  }
  async submitForm() {
    this.user = {
      email : this.form.controls.email.value,
      password : this.form.controls.password.value
    }
    await this.authService.login(this.user);
    await setTimeout(() => {
      this.router.navigate(['/']);
    }, 100)
  }

}
