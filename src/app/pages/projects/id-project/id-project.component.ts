import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { RestService } from 'src/app/services/rest.service';
// import { Task } from 'src/app/models/task.model';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-id-project',
  templateUrl: './id-project.component.html',
  styleUrls: ['./id-project.component.scss']
})
export class IdProjectComponent implements OnInit {
  // tasks: Task[];
  project: Project;

  constructor(
    // private _restService: RestService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      console.log(data);
      this.project = data.project.project;
      console.log(this.project);
    })
  }

}
