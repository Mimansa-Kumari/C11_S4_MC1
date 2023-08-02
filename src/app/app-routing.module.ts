import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { HomeComponent } from './home/home.component';
import { InvalidComponent } from './invalid/invalid.component';
import { LoginComponent } from './login/login.component';
import { NoteViewComponent } from './note-view/note-view.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    "path" : "home",
    component : HomeComponent
  },
  {
    "path":"registration",
    component:RegistrationComponent
  },
  {
    "path" : "login",
    component : LoginComponent
  },
  {
     "path" : "dashboard",
     component : DashboardComponent
  },  
  {
    "path" : "note-view",
    component : NoteViewComponent,
  },
  {
    "path" : "notes/edit-details/:id",
    component : EditDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
