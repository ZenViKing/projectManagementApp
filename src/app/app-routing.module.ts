import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserResolver } from './services/user.resolver'
import { CreateUserComponent } from './pages/users/create-user/create-user.component'
import { ListUserComponent } from './pages/users/list-user/list-user.component';
import { EditUserComponent } from './pages/users/edit-user/edit-user.component'
import { DeleteUserComponent } from './pages/users/delete-user/delete-user.component';

import { UserDeleterResolver } from './services/userDeleter.resolver'

import { ProjectResolver } from './services/project.resolver';
import { CreateProjectComponent } from './pages/projects/create-project/create-project.component';
import { EditProjectComponent } from './pages/projects/edit-project/edit-project.component';
import { ListProjectComponent } from './pages/projects/list-project/list-project.component';

import { TaskResolver } from './services/task.resolver';
import { CreateTaskComponent } from './pages/tasks/create-task/create-task.component';
import { ListTaskComponent } from './pages/tasks/list-task/list-task.component';
import { EditTaskComponent } from './pages/tasks/edit-task/edit-task.component';

import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { IdProjectComponent } from './pages/projects/id-project/id-project.component';
import { AuthGuard } from './services/authGuard';






const routes: Routes = [
  {
    path: '',
    component: HomeComponent, 
    canActivate: [AuthGuard] 
  },
  {
    path: 'login',
    component: LoginComponent
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
  // {
  //   path: 'project/:id',
  //   component: EditProjectComponent
  // },
  {
    path: 'projects/:id',
    component: EditProjectComponent,
    resolve: { project: ProjectResolver }
  },
  {
    path: 'idproject/:id',
    component: IdProjectComponent,
    resolve: {project: ProjectResolver}
  },
  {
    path: 'projects',
    component: ListProjectComponent
  },

  //Routes Task Component
  {
    path: 'idproject/:id/task/add',
    component: CreateTaskComponent
  },

  {
    path: 'idproject/:id/task/edit/:id',
    component: EditTaskComponent,
    resolve: {
      task: TaskResolver
    }
  },
  {
    path: 'tasks',
    component: ListTaskComponent
  },


  
  {
    path: '**', 
    component: NotFoundComponent
  }
  // {
  //   path: 'task/:id',
  //   component: EditTaskComponent,
  //   resolve:{
  //     task: TaskResolver
  //   }
  // }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
