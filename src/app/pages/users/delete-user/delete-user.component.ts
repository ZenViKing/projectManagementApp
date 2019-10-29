import { RestService } from 'src/app/services/rest.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {
  user: User;
  form: FormGroup

  constructor(private _restService: RestService, private router: Router, private route: ActivatedRoute) { }

  deleteForm() {
    this.user = this.form.value;
    this._restService.deleteUser(this.user).subscribe((data: User) => {
      this.user = data;
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
  }
}



  // deleteUser(id) {
  //   this._restService.deleteUser(id).subscribe(res => {
  //     this._restService.getUsers().subscribe((data: User[]) => {
  //       this.users = data;
  //     })
  //   })
  // }
