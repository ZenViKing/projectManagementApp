import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { Task } from 'src/app/models/task.model';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-id-project',
  templateUrl: './id-project.component.html',
  styleUrls: ['./id-project.component.scss']
})
export class IdProjectComponent implements OnInit {
  tasks: Task[];
  project: Project;

  constructor(private _restService: RestService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
<<<<<<< HEAD
    // console.log(this.task);
    // this._restService.getTasks().subscribe(data => {
    //   console.log(data);
    // })
=======
    this.route.data.subscribe(data => {
      this.project = data.project.project
      // console.log(this.project);
    })
>>>>>>> b3618b7ddd9d96f6ea90b22565388ab2b5ce3db3
  }

}
