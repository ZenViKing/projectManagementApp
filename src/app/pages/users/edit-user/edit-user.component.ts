import { FormGroup, Validators,FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  user:User;
  form:FormGroup
  function: any

  // constructor(private _restService: RestService, private router: Router, private route: ActivatedRoute, public _functionervice: FunctionsService) { this.functions = _functionsService.functions }

// submitForm(){
//   this.user=this.form.value;
//   this._restService.patchUser(this.user).subscribe((data:User)=>{
//     this.user=data;
//     this.router.navigate(['/users'])
//   })
// }

  ngOnInit() {
    this.form=new FormGroup({
      firstname:new FormControl (null, [Validators.required]),
      lastname:new FormControl (null, [Validators.required]),
      email:new FormControl (null, [Validators.required, Validators.email]),
      function:new FormControl (null, [Validators.required])
    })
  }

}
 