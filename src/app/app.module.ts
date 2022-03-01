import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { myRoutings } from './app-routing.module';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    
    myRoutings,
         RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
