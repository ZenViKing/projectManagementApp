import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Task } from '../../models/task.model';
import { RestService } from '../../services/rest.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogPopupComponent } from '../dialog-popup/dialog-popup.component';


@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit {

  tasks: Task[];
  task: Task;

  backlog: Task[] = [];
  todos: Task[] = [];
  inprogress: Task[] = [];
  done: Task[] = [];

  constructor(private _restService: RestService,
              private router: Router,
              public dialog: MatDialog
              ) { }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      let task = event.item.data;
      task.status = event.container.element.nativeElement.id;

      let idgetter = this.router.url.split('/');
      this._restService.updateTask(idgetter[2], task).subscribe(data => {
      })
    }
  }

  //MOVED to dialog-popup component
  // deleteTask(id) {
  //   let idgetter = this.router.url.split('/');

  //   let r = confirm('Delete task ?')
  //   if (r === true) {
  //     console.log('task deleted');
  //     this._restService.deleteTask(idgetter[2], id).subscribe(res => {
  //       this._restService.getTasks(idgetter[2]).subscribe((data: Task[]) => {
  //         this.tasks = data;
  //         window.location.reload();
  //       });
  //     })
  //   } else {
  //     console.log('action aborded');
  //   }
  // }

 
  openDialog(id): any {
    let idgetter = this.router.url.split('/');
    
      this._restService.getTaskByid(idgetter[2],id).subscribe((data:Task)=>{
      this.task = data;
    

    const dialogRef = this.dialog.open(DialogPopupComponent, {
      width: '30vw',
      
      data: {
        name : this.task.name,
        priority: this.task.priority,
        assignedUsers: this.task.assignedUsers,
        desc : this.task.desc,
        project: this.task.project,
        _id: this.task._id
      }
    });
    })
    
    
    
   
  }

  ngOnInit() {
    // /* ---------------------------- get the id in url --------------------------- */
    let idgetter = this.router.url.split('/');
    // /* ------------------------------------ x ----------------------------------- */
    this._restService.getTasks(idgetter[2]).subscribe(data => {
      this.task = this._restService.filter(data, 'project')
      this.backlog = this._restService.filter(data, 'backlogs');
      this.todos = this._restService.filter(data, 'todo');
      this.inprogress = this._restService.filter(data, 'inprogress');
      this.done = this._restService.filter(data, 'done');
    });
    
  }
}
