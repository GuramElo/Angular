import { Component } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import {EventEmitter } from '@angular/core';
import { HW0Component } from './hw0/hw0.component';
import { bindCallback } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {




public UserObject:any={};
public count:number=0;

public deleteUser(){
let a:any=prompt("input the E-mail User You wish to delete from the list");
a=(a as string).trim();
let sec=(<HTMLSelectElement>document.querySelector("#"+this.UserObject[a]));
sec.remove();
}

public userInput(value:{
  "E-mail":string,
  "Password":string,
  "Nickname":string,
  "Phone Number":string,
  "Website":string
  }){
  //this.UserArray.push(JSON.stringify(value));
  this.UserObject[value['E-mail']]=`user${this.count+1}`
  console.log(value);
  this.count++;

  let b=document.createElement("section");
  b.id=`user${this.count}`;
  b.innerText=JSON.stringify(value);
//  let c=document.createElement("button");
 //let c=document.createElement("button");
 //c.textContent="Delete";
//c.addEventListener("click",()=>{
//  this.deleteUser(`user${this.count}`);
//})
 //c=`user${this.count}`;

 //b.appendChild(c);
//=====
//let event = document.createEvent("HTMLEvents");
//event.initEvent("click", true, true);
////var button = document.getElementsByClassName('btn')[0];
//c.dispatchEvent(event);
//=====

  (<HTMLSelectElement>document.querySelector("section:last-child"))?.append(b);
  }




  title = 'HW';
ngOnInit(){
let a=(<HTMLSelectElement>document.getElementById("frtest"));
console.log(a);


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
