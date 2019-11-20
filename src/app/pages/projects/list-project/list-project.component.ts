import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.scss']
})
export class ListProjectComponent implements OnInit {
  projects: Project[];
  constructor(private _restService: RestService, private router: Router) { }

  deleteProject(id) {
    let del = confirm('Are you sure you want to delete this project ?');
    if (del == true) {
      console.log('it works')
      this._restService.deleteProject(id).subscribe(response => {
        this._restService.listProjects().subscribe((data: Project[]) => {
          this.projects = data;
        });
      });
    } else {
      console.log('no delete');
    }
  }
  ngOnInit() {
    this._restService.listProjects().subscribe((data: Project[]) => {
      this.projects = data;
    });
  }
}
