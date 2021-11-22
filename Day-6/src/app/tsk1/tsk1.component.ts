import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { observable } from 'rxjs';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-tsk1',
  templateUrl: './tsk1.component.html',
  styleUrls: ['./tsk1.component.scss']
})
export class Tsk1Component implements OnInit {
public addRec():void{
  const headers = { 
    'Authorization': 'token',
    'My-Custom-Header': 'Random' };
    
    const body = {
      name:(this.form.get("name") as FormControl).value,
      salary:(this.form.get("salary") as FormControl).value,
      age:(this.form.get("age") as FormControl).value,
     };
    this.http.post<any>('http://localhost:4000/employees', body, { headers }).subscribe(data => {
    console.log(data);   
    });


}
public form:FormGroup=new FormGroup({
  name:new FormControl("",[Validators.required]),
  salary:new FormControl("",[Validators.required]),
  age:new FormControl("",[Validators.required]),
})





  constructor(private http:HttpClient) { 

  }

  ngOnInit(): void {
//======================================
//======================================

//======================================
//======================================

//======================================

//======================================
//======================================
//======================================


  }

}
