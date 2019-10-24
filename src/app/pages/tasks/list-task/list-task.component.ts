import { Component, OnInit } from '@angular/core';
import {Task} from 'src/app/models/task.model';
import {RestService} from 'src/app/services/rest.service';
@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent implements OnInit {
  tasks: Task[];
  constructor(private _restService: RestService) {}

  ngOnInit() {
    this._restService.getTasks().subscribe((data: Task[])=>{
      this.tasks = data;
    });
  }
}
