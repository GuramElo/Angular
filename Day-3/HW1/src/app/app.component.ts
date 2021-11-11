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
 
  //public userInput(value:{clicked:boolean}){
  //  console.log(value);
  //}




  title = 'HW';
ngOnInit(){
  (<HTMLSelectElement>document.querySelector(".usersPage")).onclick=()=>{
    (<HTMLSelectElement>document.querySelector("app-hw0")).style.display="none";
    (<HTMLSelectElement>document.querySelector("#hided")).style.display="initial";


      
  };



}






}
