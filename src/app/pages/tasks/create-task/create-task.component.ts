import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
import { Task } from 'src/app/models/task.model';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/project.model';

// import { Task } from 'src/app/models/task.model';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {
  users: User[];
  task: Task;
  form: FormGroup;
  project: Project;

  constructor(private _restService: RestService, private router: Router) { }

  //Form validation (submit disabled if not true)
  onSubmit(){
    console.warn(this.form.value);
  }

  // //Description clear
  // desc = "description here ...";
  // clear(){
  //   console.log('hello');
  //   this.desc = '';

  // }

  //Submit
  submitForm(){
    this.task = this.form.value;
    console.log(this.router.url);
    this._restService.postTask(this.project._id, this.task).subscribe((data: Task)=>{
      this.task = data;
      this.router.navigate([`/tasks`])
    })
  }

  //Errors handling
  getErrorMessage(field: string): string {
    const errors = {
      required: 'This field is required',
      minlength: 'Enter at least 3 letters'
    };

    let returnValue = '';
    Object.keys(this.form.controls[field].errors).map((key, index) => {
      returnValue += `Rule ${index} - ${errors[key]} `;
    });
    return returnValue;
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required,Validators.minLength(3)]),
      desc: new FormControl(null),
      status: new FormControl(null,[Validators.required]),
      assignedUsers: new FormControl(null)
    })
    this._restService.getUsers().subscribe((data: User[])=>{
      this.users = data;
    })
  }

}
