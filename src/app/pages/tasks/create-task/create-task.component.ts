import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
import { Task } from 'src/app/models/task.model';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

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
  constructor(private _restService: RestService, private router: Router) { }
  submitForm(){
    this.task = this.form.value;
    this._restService.postTask(this.task).subscribe((data: Task)=>{
      this.task = data;
      this.router.navigate(['/projects/:id/task/list'])
    })
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null),
      status: new FormControl(null),
      assignedUsers: new FormControl(null)
    })

    this._restService.getUsers().subscribe((data: User[])=>{
      this.users = data;
    })
  }

}
