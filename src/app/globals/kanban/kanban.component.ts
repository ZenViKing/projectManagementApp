import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../models/task.model';
import { Project } from '../../models/project.model';
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
  project: Project;

  backlog: Task[] = [];
  todos: Task[] = [];
  inprogress: Task[] = [];
  done: Task[] = [];


  constructor(private _restService: RestService,
    private router: Router,
    private route: ActivatedRoute
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
      let a = this.router.url.split('/');
      this._restService.updateTask(a[2], task).subscribe(data => {
        console.log(data);
      })
    }
  }


  deleteTask(id) {
    let a = this.router.url.split('/');
    console.log(a[2]);

    let r = confirm('Delete task ?')
    if (r === true) {
      console.log('task deleted');
      this._restService.deleteTask(a[2], id).subscribe(res => {
        this._restService.getTasks(a[2]).subscribe((data: Task[]) => {
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
    let a = this.router.url.split('/');
    // /* ------------------------------------ x ----------------------------------- */

    //     this.route.data.subscribe(data => {
    //       console.log(this.route);
    //       this.project = data.project.project
    //       // console.log(this.project);
    //     })
    this._restService.getTasks(a[2]).subscribe(data => {

      this.task = this._restService.filter(data, 'project')
      this.backlog = this._restService.filter(data, 'backlogs');
      this.todos = this._restService.filter(data, 'todo');
      this.inprogress = this._restService.filter(data, 'inprogress');
      this.done = this._restService.filter(data, 'done');
    });
  }

}
