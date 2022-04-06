import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ApplicationComponent } from './application/application.component';
import { DemoComponent } from './demo/demo.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'application', component: ApplicationComponent },
  { path: 'register', component: RegisterComponent },
  // { path: 'demo', component: DemoComponent},
  { path: '', component: DemoComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'admindashboard', component: AdmindashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const myRoutings = [
  LoginComponent,
  HomeComponent,
  DemoComponent,
  ApplicationComponent,
  RegisterComponent,
  AdminloginComponent,
  AdmindashboardComponent,
];
