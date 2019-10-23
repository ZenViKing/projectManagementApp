import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  user: User;
  form: FormGroup;

  constructor(private _restService: RestService, private router: Router) {
  }

  submitForm() {
    this.user = this.form.value;
    this._restService.postUser(this.user).subscribe((data: User) => {
      this.user = data;
      this.router.navigate(['/users'])
    })

  }


  ngOnInit() {
    this.form = new FormGroup({
      firstname: new FormControl(null, [Validators.required]),
      lastname: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      fonction: new FormControl(null, [Validators.required])
    })
  }

}
