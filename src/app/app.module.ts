import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { AddfacultiesComponent } from './addfaculties/addfaculties.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
const appRoutes:Routes=[
  {
    path:"" ,component:LoginComponent

  },
  {
    path:"dashboard",component:DashboardComponent
  },
  {
    path:"addstudent",component:AddstudentComponent
  },
  {
    path:"addfaculty",component:AddfacultiesComponent
  },
  {
    path:"viewstudent" ,component:ViewstudentComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent,
    AddstudentComponent,
    AddfacultiesComponent,
    ViewstudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
