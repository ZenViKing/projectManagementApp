import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
