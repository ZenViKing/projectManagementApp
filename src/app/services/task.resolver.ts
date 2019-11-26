import { Injectable } from "@angular/core";
import { RestService } from './rest.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { map } from 'rxjs/operators';
import { Project } from '../models/project.model';
import { Router } from '@angular/router';

@Injectable(
    
    { providedIn:'root'}
    
)

export class TaskResolver implements Resolve<Task> {
    project: Project;
    constructor(private _restService: RestService, private routeA: Router) { }
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<Task> | Promise<Task> {
            let a = this.routeA.url.split('/');
            return this._restService.getTaskByid(a[1], route.params['id']).pipe(map(task => task));
        }
}