import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateUserComponent } from './pages/users/create-user/create-user.component'
import { EditUserComponent } from './pages/users/edit-user/edit-user.component'

import { CreateProjectComponent } from './pages/projects/create-project/create-project.component';
import { EditProjectComponent } from './pages/projects/edit-project/edit-project.component';

import { CreateTaskComponent } from './pages/tasks/create-task/create-task.component';
import { EditTaskComponent } from './pages/tasks/edit-task/edit-task.component';
import { ListUserComponent } from './pages/users/list-user/list-user.component';
import { ListProjectComponent } from './pages/projects/list-project/list-project.component';
import { ListTaskComponent } from './pages/tasks/list-task/list-task.component';




const routes: Routes = [

  //Routes User component 
  {
    path: 'user/add',
    component: CreateUserComponent
  },
  {
    path: 'user/edit',
    component: EditUserComponent
  },
  {
    path: 'user/list',
    component: ListUserComponent
  },

  //Routes Project Components
  {
    path: 'project/add',
    component: CreateProjectComponent
  },

  {
    path: 'project/edit',
    component: EditProjectComponent
  },
  {
    path: 'project/list',
    component: ListProjectComponent
  },

  //Routes Task Component
  {
    path: 'task/add',
    component: CreateTaskComponent
  },

  {
    path: 'task/edit',
    component: EditTaskComponent
  },
  {
    path: 'task/list',
    component: ListTaskComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
