import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Task } from '../../models/task.model';
import { RestService } from '../../services/rest.service';
import { Router } from '@angular/router';

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
              private router: Router) { }

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
