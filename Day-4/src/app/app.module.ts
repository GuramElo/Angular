import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HW1Component } from './hw1/hw1.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,FormControl, ReactiveFormsModule} from '@angular/forms';
//import {  } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    HW1Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
   // Pipe,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
