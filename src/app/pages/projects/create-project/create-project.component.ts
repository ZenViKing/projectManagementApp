import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Project } from './../../../models/project.model';
import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  project: Project;
  form: FormGroup;

  constructor(private _restService: RestService, private router: Router) { }
  submitForm() {
    this.project = this.form.value;
    this._restService.postProject(this.project).subscribe((data: Project) => {
      this.project = data;
      this.router.navigate(['/projects'])
    })

  }
  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
      deadline: new FormControl(null, [Validators.required]),
      time: new FormControl(null, [Validators.required]),
      staff: new FormControl(null, [Validators.required]),
      desc: new FormControl(null, [Validators.required]),
      inProgress: new FormControl(null, [Validators.required]),
    })
  }

}
