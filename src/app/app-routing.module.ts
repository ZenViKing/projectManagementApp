import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateUserComponent} from './pages/users/create-user/create-user.component'
import {CreateProjectComponent} from './pages/projects/create-project/create-project.component'
import {CreateTaskComponent} from './pages/tasks/create-task/create-task.component'
import {EditTaskComponent} from './pages/tasks/edit-task/edit-task.component'

const routes: Routes = [
//Routes User component 
{
path :'user/add',
component: CreateUserComponent
},

//Routes Project Components
{
  path: 'project/add',
  component: CreateProjectComponent
},

//Routes Task Component
{
  path: 'task/add',
  component: CreateTaskComponent
},
{
  path: 'task/edit',
  component: EditTaskComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
