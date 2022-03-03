import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './application/application.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'application', component: ApplicationComponent},
  
  {path:'register', component:RegisterComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const myRoutings = [
                  LoginComponent,
                  HomeComponent,
                  ApplicationComponent,
                  
                  RegisterComponent
]
