import { RestService } from 'src/app/services/rest.service';
import { FormGroup, Validators,FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  user:User;
  form:FormGroup;
  // fonction: any

constructor(private _restService:RestService, private router: Router, private route:ActivatedRoute){}



submitForm() {
  this.user = this.form.value;
  this._restService.patchUser(this.user).subscribe((data: User)=>{
    this.user=data;
    this.router.navigate(['/users'])
  })
}

  ngOnInit() {
    this.form=new FormGroup({
      _id : new FormControl (Validators.required),
      __v : new FormControl (Validators.required),
      firstname:new FormControl (null, [Validators.required]),
      lastname:new FormControl (null, [Validators.required]),
      email:new FormControl (null, [Validators.required, Validators.email]),
      fonction:new FormControl (null, [Validators.required])
    })

    this.route.data.subscribe(data => {
      console.log(data.user.Users)
      this.form.setValue(data.user.Users);
      this.user = data.user.Users;
    })

}}
 