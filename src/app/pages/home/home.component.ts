import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  projects: Project[];
  constructor(private _restService: RestService) { }

  ngOnInit() {
    // if(!window.location.hash) {
    //   window.location.assign(window.location + '#loaded');
    //   setTimeout("window.location.reload(true)"),50;
    // }
    this._restService.listProjects().subscribe((data: Project[]) => { 
      this.projects = data;
    });
  }
  
}
