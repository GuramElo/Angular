import { NgModule, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule,FormGroup } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HW0Component } from './hw0/hw0.component';

//import { HW1Component } from './HW0/hw1/hw1.component';
import { EventEmitter } from '@angular/core';
//import { AllUsersComponent } from './all-users/all-users.component';
import { FormControl,Validators } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HW0Component
  //  HW1Component,
    //AllUsersComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
