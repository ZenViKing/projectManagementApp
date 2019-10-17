import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { EditUserComponent } from './pages/users/edit-user/edit-user.component';
import { DeleteUserComponent } from './pages/users/delete-user/delete-user.component';
import { CreateProjectComponent } from './pages/projects/create-project/create-project.component';
import { EditProjectComponent } from './pages/projects/edit-project/edit-project.component';
import { DeleteProjectComponent } from './pages/projects/delete-project/delete-project.component';
import { CreateTaskComponent } from './pages/tasks/create-task/create-task.component';
import { EditTaskComponent } from './pages/tasks/edit-task/edit-task.component';
import { DeleteTaskComponent } from './pages/tasks/delete-task/delete-task.component';
import { NavComponent } from './globals/nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    CreateProjectComponent,
    EditProjectComponent,
    DeleteProjectComponent,
    CreateTaskComponent,
    EditTaskComponent,
    DeleteTaskComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
