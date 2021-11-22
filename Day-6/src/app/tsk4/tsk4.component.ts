import { Component, OnInit } from '@angular/core';

import {HttpClient, HttpClientModule} from "@angular/common/http";
import { observable } from 'rxjs';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-tsk4',
  templateUrl: './tsk4.component.html',
  styleUrls: ['./tsk4.component.scss']
})
export class Tsk4Component implements OnInit {
public tuta1:FormControl=new FormControl(0,[Validators.required]);

public deleteEmployee():void{
  this.http.delete<any>(`http://localhost:4000/employees/${this.tuta1.value}`).subscribe();
}
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

}
