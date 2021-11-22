import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Tsk1Component } from './tsk1/tsk1.component';
import { Tsk2Component } from './tsk2/tsk2.component';
import { Tsk3Component } from './tsk3/tsk3.component';
import { Tsk4Component } from './tsk4/tsk4.component';
import { Tsk5Component } from './tsk5/tsk5.component';

@NgModule({
  declarations: [
    AppComponent,
    Tsk1Component,
    Tsk2Component,
    Tsk3Component,
    Tsk4Component,
    Tsk5Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
