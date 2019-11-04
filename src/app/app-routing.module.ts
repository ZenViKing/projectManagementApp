import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateUserComponent } from './pages/users/create-user/create-user.component'
import { EditUserComponent } from './pages/users/edit-user/edit-user.component'
import { UserResolver } from './services/user.resolver'
import { UserDeleterResolver } from './services/userDeleter.resolver'

import { CreateProjectComponent } from './pages/projects/create-project/create-project.component';
import { EditProjectComponent } from './pages/projects/edit-project/edit-project.component';

import { CreateTaskComponent } from './pages/tasks/create-task/create-task.component';
import { EditTaskComponent } from './pages/tasks/edit-task/edit-task.component';
import { ListUserComponent } from './pages/users/list-user/list-user.component';
import { ListProjectComponent } from './pages/projects/list-project/list-project.component';
import { ListTaskComponent } from './pages/tasks/list-task/list-task.component';
import { HomeComponent } from './pages/home/home.component';
import { DeleteUserComponent } from './pages/users/delete-user/delete-user.component';
import { ProjectResolver } from './services/project.resolver';




const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  //Routes User component 
  {
    path: 'users',
    component: ListUserComponent
  },
  {
    path: 'user/add',
    component: CreateUserComponent
  },
  {
    path: 'user/edit',
    component: EditUserComponent
  },
  {
    path: 'user/delete/:id',
    component: DeleteUserComponent,
    resolve: { user: UserResolver }

  },
  {
    path: 'user/:id',
    component: EditUserComponent
  },
  {
    path: 'users/:id',
    component: EditUserComponent,
    resolve: { user: UserResolver }
  },

  //Routes Project Components
  {
    path: 'project/add',
    component: CreateProjectComponent
  },
  {
    path: 'project/:id',
    component: EditProjectComponent
  },
  {
    path: 'projects/:id',
    component: EditProjectComponent,
    resolve: { project: ProjectResolver }
  },
  {
    path: 'projects',
    component: ListProjectComponent
  },

  //Routes Task Component
  {
    path: 'projects/:id/task/add',
    component: CreateTaskComponent
  },

  {
    path: 'task/edit',
    component: EditTaskComponent
  },
  {
    path: 'projects/:id/task/list',
    component: ListTaskComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
