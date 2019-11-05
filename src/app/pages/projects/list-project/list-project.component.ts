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

  ngOnInit() {
    this._restService.listProjects().subscribe((data: Project[]) => {
      this.projects = data;
    });
  }

}
