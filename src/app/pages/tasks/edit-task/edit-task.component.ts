import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { Task } from 'src/app/models/task.model';
import { User } from 'src/app/models/user.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Project } from 'src/app/models/project.model';


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  task: Task;
  users: User[];
  form: FormGroup;
  project: Project;

  constructor(private _restService: RestService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  
  submitForm() {
    let idgetter = this.router.url.split('/');
    this.task = this.form.value;
    this._restService.updateTask(idgetter[3],this.task).subscribe((data: Task) => {
      this.task = data;
      this.router.navigate([`/idproject/${idgetter[2]}`]);
    })
  }

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
      _id: new FormControl(Validators.required),
      __v: new FormControl(Validators.required),
      status: new FormControl(Validators.required),
      project: new FormControl(Validators.required),
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      desc: new FormControl(null),
      priority: new FormControl(null, [Validators.required]),
      assignedUsers: new FormControl(null)
    })

    this._restService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    })

    this.route.data.subscribe(data => {
      this.form.setValue(data.task);
      this.task = data.task;
    });
  }
}
