import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
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
    project: Project;
    
  
  backlog: Task[] = [];
  todos: Task[] = [];
  inprogress: Task[] = [];
  done: Task[] = [];

  constructor(private _restService: RestService, private route: Router) { }

  drop(event: CdkDragDrop<string[]>){
    if(event.previousContainer === event.container){
      moveItemInArray(  event.container.data,
                        event.previousIndex,
                        event.currentIndex  );
    } else {
      transferArrayItem(  event.previousContainer.data,
                          event.container.data,
                          event.previousIndex,
                          event.currentIndex  );
      let task = event.item.data;
      task.status = event.container.element.nativeElement.id;
      this._restService.updateTask(task).subscribe(data => {
        console.log(data);
      })
    }
  }

 
    

    // console.log(object);
  


  ngOnInit() {
    
/* ---------------------------- get the id in url --------------------------- */
    let a = this.route.url.split('/');
    // let b = '5dadc5edc04b2647bbb448cf';
    // let [,,c] = a;
    // console.log(a);
    // console.log(c);
    // console.log(typeof(a[2]));
    // console.log(typeof(b));
    //------------------------
    
    this._restService.getTasks(a[2]).subscribe(data => {
        console.log(data);
      this.backlog = this._restService.filter(data, 'backlogs');
      this.todos = this._restService.filter(data, 'todo');
      this.inprogress = this._restService.filter(data, 'inprogress');
      this.done = this._restService.filter(data, 'done');
    });
  }

}
