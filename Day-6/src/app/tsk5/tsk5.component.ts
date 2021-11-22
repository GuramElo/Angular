import { Component, OnInit } from '@angular/core';

import {HttpClient, HttpClientModule} from "@angular/common/http";
import { observable } from 'rxjs';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tsk5',
  templateUrl: './tsk5.component.html',
  styleUrls: ['./tsk5.component.scss']
})
export class Tsk5Component implements OnInit {
public iterate(char:string){
  if(char=="+")this.numberrs++;
  else this.numberrs--;

  if(this.numberrs<0)this.numberrs++;
  if(this.numberrs>this.arr.length-1)this.numberrs--;
  console.log(this.numberrs);
}

public arr:any[]=[];
public numberrs:number=0;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>("http://localhost:4000/employees")
    .subscribe((s)=>{
      this.arr=s;
      console.log(this.arr);
    })
    
  }

}
