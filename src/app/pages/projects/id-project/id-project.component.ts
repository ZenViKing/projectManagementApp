import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-id-project',
  templateUrl: './id-project.component.html',
  styleUrls: ['./id-project.component.scss']
})
export class IdProjectComponent implements OnInit {
  task: Task;
  constructor(private _restService : RestService) { }

  ngOnInit() {
    console.log(this.task);
    // this._restService.getTasks().subscribe(data => {
    //   console.log(data);
    // })
  }

}
