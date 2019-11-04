import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { Task } from 'src/app/models/task.model';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  task: Task;
  form: FormGroup;

  constructor(private _restService: RestService,
    private router: Router,
    private route: ActivatedRoute
    ) { }
    submitForm(){
      this.task = this.form.value;
      this._restService.updateTask(this.task).subscribe((data: Task)=>{
        this.task = data;
        this.router.navigate(['task/list']);
      })
    }
  ngOnInit() {

    this.route.data.subscribe(data => {
      this.form.setValue(data.task);
      this.task = data.task;
    });
  }

}
