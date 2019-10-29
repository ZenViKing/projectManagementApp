import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Project } from './../../../models/project.model';
import { Component, OnInit, Input } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';
// test ajout user
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  project: Project;
  form: FormGroup;
  staff: User[]

  constructor(private _restService: RestService, private router: Router) { }

  // pour avoir valeur false si on ne clique pas la checkbox inProgress
  @Input('isInProgress') isInProgress: boolean;
  setInProgress() {
    this.isInProgress = !this.isInProgress;
  }

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
      // pour avoir valeur false si on ne clique pas la checkbox inProgress
      // false à la place de null
      inProgress: new FormControl(false, [Validators.required]),
    })
    // pour avoir liste users existants
    this._restService.getUsers().subscribe((data: User[]) => {
      this.staff = data;
    })
  }
  // TODO: ajouter seulement un user existant
  // pour ajouter plusieurs users
  // onAdd() {
  //   this.listUsers.push(this.user);
  // }
}
