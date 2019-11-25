import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Project } from './../../../models/project.model';
import { Component, OnInit, Input } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  project: Project;
  form: FormGroup;
  staff: User[];
  error: String;
  // pour avoir la date du jour de création du projet
  startDate = new Date();

  constructor(private _restService: RestService, private router: Router) { }

  // pour avoir valeur false si on ne clique pas la checkbox inProgress
  @Input('isInProgress') isInProgress: boolean;
  setInProgress() {
    this.isInProgress = !this.isInProgress;
  }

  submitForm() {
    this.project = this.form.value;
    if (this.form.invalid) {
      const error = {
        required: 'Date field is required'
      }

      if (!this.form.controls['deadline'] || !this.form.controls['date']) {
        this.error = error.required;
        console.log("eefrjfnskdfn");
      }
      return false;
    } else {
      this._restService.postProject(this.project).subscribe((data: Project) => {
        this.project = data;
        this.router.navigate(['/projects'])
      })
    }
  }

  checkField(): null {
    console.log("Hey");
    const error = {
      required: 'Date field is required'
    }

    let returnValue = '';
    if (!this.form.controls['deadline'] || !this.form.controls['date']) {
      this.error = error.required;
    }
    return null;
  }

  getErrorMessage(field: string): string {
    const error = {
      required: 'This field is required',
      // était utilisé pour le validator ave regex
      // pattern: 'Only numbers'
    }

    let returnValue = '';

    Object.keys(this.form.controls[field].errors).map(key => {
      returnValue += `${error[key]}`
    })

    return returnValue;
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
      deadline: new FormControl(null, [Validators.required]),
      time: new FormControl(null, [Validators.required]),
      // https://stackblitz.com/edit/angular-input-pattern-digits-only
      // time: new FormControl(null, Validators.compose([Validators.required, Validators.pattern(/\d+/)])),
      staff: new FormControl(null, [Validators.required]),
      desc: new FormControl(null),
      // pour avoir valeur false si on ne clique pas la checkbox inProgress
      // false à la place de null
      inProgress: new FormControl(false, [Validators.required]),
    })
    // pour avoir liste users existants
    this._restService.getUsers().subscribe((data: User[]) => {
      this.staff = data;
    })
  }
}

