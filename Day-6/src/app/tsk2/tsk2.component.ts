import { Component, OnInit } from '@angular/core';
//import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { observable } from 'rxjs';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-tsk2',
  templateUrl: './tsk2.component.html',
  styleUrls: ['./tsk2.component.scss']
})
export class Tsk2Component implements OnInit {
public employees:any[]=[];

//=============
public getEmployee():void{
this.http.get<any>(`http://localhost:4000/employees/${this.tuta.value}`)
.subscribe((s)=>{
this.employees.push(s);
});
}
public tuta:FormControl=new FormControl("",[Validators.required]);
//============
constructor(private http:HttpClient) { }

  ngOnInit(): void {
  
  }

}
