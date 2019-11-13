import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { Task } from 'src/app/models/task.model';
import { Project } from 'src/app/models/project.model';
=======
import { Task } from 'src/app/models/task.model';
import { RestService } from 'src/app/services/rest.service';
>>>>>>> 6c6d1521dadb7d226e6dc1fe0fb3c70e902f2b58

@Component({
  selector: 'app-id-project',
  templateUrl: './id-project.component.html',
  styleUrls: ['./id-project.component.scss']
})
export class IdProjectComponent implements OnInit {
<<<<<<< HEAD
  tasks: Task[];
  project: Project;

  constructor(private _restService: RestService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    
    
    this.route.data.subscribe(data => {
      this.project = data.project.project
      console.log(this.project);
    })
    
    // this._restService.getTasks(this.project._id).subscribe((data: Task[]) => {
    //   this.tasks = data;
    //   console.log(this.tasks);
    // });
=======
  task: Task;
  constructor(private _restService : RestService) { }

  ngOnInit() {
    console.log(this.task);
    // this._restService.getTasks().subscribe(data => {
    //   console.log(data);
    // })
>>>>>>> 6c6d1521dadb7d226e6dc1fe0fb3c70e902f2b58
  }

}
