import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/project.model';
import {Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-id-project',
  templateUrl: './id-project.component.html',
  styleUrls: ['./id-project.component.scss']
})
export class IdProjectComponent implements OnInit {
  project: Project;
  task: Task;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.project = data.project.project;
    })
  }
}
