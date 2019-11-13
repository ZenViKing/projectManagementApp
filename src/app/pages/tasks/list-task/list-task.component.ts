import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { Project } from 'src/app/models/project.model';
import { RestService } from 'src/app/services/rest.service';
@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent implements OnInit {
  tasks: Task[];
  project: Project;

  constructor(private _restService: RestService) { }

  deleteTask(id) {
    let r = confirm('Delete task ?')
    if (r === true) {
      console.log('task deleted');
      this._restService.deleteTask(id).subscribe(res => {
        this._restService.getTasks(id).subscribe((data: Task[]) => {
          this.tasks = data;
        });
      })
    } else {
      console.log('action aborded');
    }
  }

  ngOnInit() {
    this._restService.getTasks(this.project._id).subscribe((data: Task[]) => {
      this.tasks = data;
    });
  }
}
