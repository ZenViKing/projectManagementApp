// import { Injectable } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from '../models/project.model';
import { User } from '../models/user.model';
// import { Task } from '../models/task.model';
// import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }


  listProjects(): Observable<Project[]> {
    return this.http.get('http://localhost:8001/api/projects/').pipe(map(data => data as Project[]));
  }
  // getProjectByid(id: number): Observable<Project>{
  //   return this.http.get(`http://localhost:3000/projects/${id}`).pipe(map(data=>data as Task));
  // }
  postProject(project: Project): Observable<Project> {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post('http://localhost:8001/api/projects', project, { headers });
  }
  // deleteProject(id: number): Observable<Project>{
  //   const headers = new HttpHeaders().set('content-type','application/json');
  //   return this.http.delete(`http://localhost:3000/projects/${id}`,{headers});
  // }
  // updateProject(id: number): Observable<Project>{
  //   const headers = new HttpHeaders().set('content-type','application/json');
  //   return this.http.patch(`http://localhost:3000/projects/${id}`,{headers});
  // }



  // getTasks(): Observable<Task[]>{
  //   return this.http.get('http://localhost:3000/tasks').pipe(map(data=>data as Task[]));
  // }
  // getTaskByid(id: number): Observable<Task>{
  //   return this.http.get(`http://localhost:3000/tasks/${id}`).pipe(map(data=>data as Task));
  // }
  // postTask(task: Task): Observable<Task>{
  //   const headers = new HttpHeaders().set('content-type','application/json');
  //   return this.http.post('http://localhost:3000/tasks',task,{headers});
  // }
  // deleteTask(id: number): Observable<Task>{
  //   const headers = new HttpHeaders().set('content-type','application/json');
  //   return this.http.delete(`http://localhost:3000/tasks/${id}`,{headers});
  // }
  // updateTask(id: number): Observable<Task>{
  //   const headers = new HttpHeaders().set('content-type','application/json');
  //   return this.http.patch(`http://localhost:3000/tasks/${id}`,{headers});
  // }



  getUsers(): Observable<User[]>{
    return this.http.get('http://localhost:8001/api/users').pipe(map(data=>data as User[]));
  }
//   getUserByid(id: number): Observable<User>{
//     return this.http.get(`http://localhost:3000/users/${id}`).pipe(map(data=>data as User));
//   }
  postUser(user: User): Observable<User>{
    const headers = new HttpHeaders().set('content-type','application/json');
    return this.http.post('http://localhost:8001/api/users',user,{headers});
  }
  //   deleteUser(id: number): Observable<User>{
  //     const headers = new HttpHeaders().set('content-type','application/json');
  //     return this.http.delete(`http://localhost:3000/users/${id}`,{headers});
  //   }
  //   updateUser(id: number): Observable<User>{
  //     const headers = new HttpHeaders().set('content-type','application/json');
  //     return this.http.patch(`http://localhost:3000/users/${id}`,{headers});
  //   }

}
