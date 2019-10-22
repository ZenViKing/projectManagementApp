// import { RestService } from 'src/app/services/rest.service';
// import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormControl} from '@angular/forms';
import {User} from 'src/app/models/user.model';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  user : User;
  form: FormGroup;

  // constructor(private _restService : RestService, private router : Router) {
  // }
  constructor() {
  }


  ngOnInit() {
    this.form= new FormGroup({
      firstname: new FormControl (null, [Validators.required]),
      lastname: new FormControl (null, [Validators.required]),
      email: new FormControl (null, [Validators.required, Validators.email]),
      function:new FormControl (null, [Validators.required])
    })
  }

}
