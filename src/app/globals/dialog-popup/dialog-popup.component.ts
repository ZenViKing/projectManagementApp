import { Component, OnInit,Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {RestService} from '../../services/rest.service';
import { Task } from 'src/app/models/task.model';
import { Router } from '@angular/router';




@Component({
  selector: 'app-dialog-popup',
  templateUrl: './dialog-popup.component.html',
  styleUrls: ['./dialog-popup.component.scss']
})
export class DialogPopupComponent implements OnInit {
  tasks: Task[];

  constructor(
    private _restService: RestService,
    private router: Router,
    public dialogRef: MatDialogRef<DialogPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
      this.dialogRef.close();
    }


    deleteTask(id) {
      let idgetter = this.router.url.split('/');
  
      let r = confirm('Delete task ?')
      if (r === true) {
        console.log('task deleted');
        this._restService.deleteTask(idgetter[2], id).subscribe(res => {
          this._restService.getTasks(idgetter[2]).subscribe((data: Task[]) => {
            this.tasks = data;
            window.location.reload();
          });
        })
      } else {
        console.log('action aborded');
      }
    }

  ngOnInit() {
   
  }

}
