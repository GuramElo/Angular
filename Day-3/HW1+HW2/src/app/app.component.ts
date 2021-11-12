import { Component } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import {EventEmitter } from '@angular/core';
import { HW0Component } from './hw0/hw0.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
public UserArray:any[]=[];

public userInput(value:{
  "E-mail":string,
  "Password":string,
  "Nickname":string,
  "Phone Number":string,
  "Website":string
  }){
  this.UserArray.push(JSON.stringify(value));
  console.log(value);
  let b=document.createElement("section");
  b.innerText=JSON.stringify(value);
  (<HTMLSelectElement>document.querySelector("section:last-child"))?.append(b);
  }




  title = 'HW';
ngOnInit(){
  (<HTMLSelectElement>document.querySelector(".usersPage")).onclick=()=>{
    (<HTMLSelectElement>document.querySelector("app-hw0")).style.display="none";
    (<HTMLSelectElement>document.querySelector("#hided")).style.display="initial";      
  };
(<HTMLSelectElement>document.querySelector(".maestro.maestro")).onclick=()=>{
  (<HTMLSelectElement>document.querySelector("app-hw0")).style.display="initial";
  (<HTMLSelectElement>document.querySelector("#hided")).style.display="none";
}


}






}
