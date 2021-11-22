import { Component, OnInit } from '@angular/core';
//import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { observable } from 'rxjs';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-tsk3',
  templateUrl: './tsk3.component.html',
  styleUrls: ['./tsk3.component.scss']
})
export class Tsk3Component implements OnInit {
//public inpput:FormControl=new FormControl("",[Validators.required]);
//=================================
public form1:FormGroup=new FormGroup({
  name1:new FormControl("",[Validators.required]),
  salary1:new FormControl("",[Validators.required]),
  age1:new FormControl("",[Validators.required]),
  editId:new FormControl("",[Validators.required])
})

//=================================


public editRec():void{
  const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
  const body = {
    name:(this.form1.get("name1") as FormControl).value,
    salary:(this.form1.get("salary1") as FormControl).value,
    age:(this.form1.get("age1") as FormControl).value,

  };
  this.http.put<any>(`http://localhost:4000/employees/${(this.form1.get("editId") as FormControl).value}`, body, { headers })
     .subscribe();
}
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

}
