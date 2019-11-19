
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from '../models/project.model';
import { User } from '../models/user.model';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  token;
  currentUser;
  headers;

  constructor(private http: HttpClient) { 
    this.currentUser = localStorage.getItem('currentUser') || null
    this.token = localStorage.getItem("tokenUser") || null
    if (this.token != null) {
      this.headers = new HttpHeaders({
        "authorization" : `Bearer ${this.token}`,
        "content-type" : "application/json"

      })
    } else {
      this.headers = new HttpHeaders({
        "content-type" : "application/json"
      })
    }
  }


  listProjects(): Observable<Project[]> {
    return this.http.get('http://localhost:8001/api/projects/', {headers: this.headers}).pipe(map(data => data as Project[]));
  }
  getProjectByid(id: any): Observable<Project> {
    // return this.http.get(`http://localhost:8001/api/projects/${id}`).pipe(map(data => data as Task));
    return this.http.get(`http://localhost:8001/api/projects/${id}`).pipe(map(data => data as Project));
  }
  postProject(project: Project): Observable<Project> {
    // const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post('http://localhost:8001/api/projects', project, { headers: this.headers });
  }
  patchProject(project: Project): Observable<Project> {
    // const headers = new HttpHeaders().set('content-type', 'application/json');
    // return this.http.patch(`http://localhost:8001/api/projects/${id}`, { headers });
    return this.http.patch(`http://localhost:8001/api/projects/${project._id}`, project, { headers: this.headers });
  }
  deleteProject(id: number): Observable<Project> {
    // const headers = new HttpHeaders().set('content-type', 'application/json');
    // return this.http.delete(`http://localhost:8001/api/projects/${id}`, { headers });
    return this.http.delete(`http://localhost:8001/api/projects/${id}`, { headers: this.headers });
  }




  getTasks(idProject: string): Observable<Task[]> {
    return this.http.get(`http://localhost:8001/api/projects/${idProject}/tasks`).pipe(map(data => data as Task[]));
  }
  getTaskByid(idProject: string, idTask: number): Observable<Task> {
    return this.http.get(`http://localhost:8001/api/projects/${idProject}/tasks/${idTask}`).pipe(map(data => data as Task));
  }
  postTask(idProject: string, task: Task): Observable<Task> {
    // const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(`http://localhost:8001/api/projects/${idProject}/tasks`, task, { headers: this.headers });
  }
  deleteTask(idProject: string, idTask: number): Observable<Task> {
    // const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.delete(`http://localhost:8001/api/projects/${idProject}/tasks/${idTask}`, { headers: this.headers });
  }
  updateTask(idProject: string, task: Task): Observable<Task> {
    // const headers = new HttpHeaders().set('content-type', 'application/json');
    // console.log("id : " + task._id);
    return this.http.patch(`http://localhost:8001/api/projects/${idProject}/tasks/${task._id}`, task, { headers: this.headers });
  }



  getUsers(): Observable<User[]> {
    return this.http.get('http://localhost:8001/api/users').pipe(map(data => data as User[]));
  }

  getUserByid(id: number): Observable<User> {
    return this.http.get(`http://localhost:8001/api/users/${id}`).pipe(map(data => data as User));
  }

  patchUser(user: User): Observable<User> {
    // const headers = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.patch(`http://localhost:8001/api/users/${user._id}`, user, { headers: this.headers });
  }

  postUser(user: User): Observable<User> {
    // const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post('http://localhost:8001/api/users', user, { headers: this.headers });
  }

  deleteUser(id: User): Observable<User> {
    // const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.delete(`http://localhost:8001/api/users/${id}`, { headers: this.headers })
  }

  loginUser(user: User): Observable<any> {
    // const headers = new HttpHeaders().set('content-type', 'application/json');
    const token = this.http.post('http://localhost:8001/api/users/login', user, {headers: this.headers});
    return token;
  }

  // updateUser(user: User): Observable<User>{
  //   const headers = new HttpHeaders().set('content-type','application/json');
  //   return this.http.patch(`http://localhost:8001/api/users/${user._id}`,{headers});
  // }


  // FILTER
  filter(tab, status) {
    return tab.filter(task =>{
      return task.status === status;
    })
  }


}
