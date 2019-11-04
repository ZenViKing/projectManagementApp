import { Injectable } from "@angular/core";
import { RestService } from './rest.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';
import { map } from 'rxjs/operators';

@Injectable(

    { providedIn: 'root' }

)

export class ProjectResolver implements Resolve<Project> {
    constructor(private _restService: RestService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<Project> | Promise<Project> {
        return this._restService.getProjectByid(route.params['id']).pipe(map(project => project));
    }
}