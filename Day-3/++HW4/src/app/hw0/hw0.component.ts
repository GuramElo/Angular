import { FormsModule } from '@angular/forms';
import { Component, OnInit,OnChanges, Output } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';
import { EventEmitter } from '@angular/core';
//import { Stream } from 'stream';
//import { Output } from '@angular/core';
@Component({
  selector: 'app-hw0',
  templateUrl: './hw0.component.html',
  styleUrls: ['./hw0.component.scss']
})
export class HW0Component implements OnInit {

@Output() public naClick:EventEmitter<{
"E-mail":string,
"Password":string,
"Nickname":string,
"Phone Number":string,
"Website":string

}>=new EventEmitter<{
  "E-mail":string,
  "Password":string,
  "Nickname":string,
  "Phone Number":string,
  "Website":string
}>();

public  userEmit():void{

this.naClick.emit({
  "E-mail":(this.form.get("in1") as FormControl).value,
  "Password":(this.form.get("in2") as FormControl).value,
  "Nickname":(this.form.get("in4") as FormControl).value,
  "Phone Number":(this.form.get("in5") as FormControl).value,
  "Website":(this.form.get("in6") as FormControl).value

});

}








//public srchController:FormControl=new FormControl("haha",
//[Validators.required,Validators.minLength(2)]);



//=============================
public form:FormGroup=new FormGroup({
  
  in1:new FormControl("",
  [Validators.required,Validators.email]),
  
  in2:new FormControl("",
  [Validators.required,Validators.pattern("[A-Za-z0-9]*"),Validators.minLength(8)]),
  
  in3:new FormControl("",
  [Validators.required,Validators.pattern("[A-Za-z0-9]*"),Validators.minLength(8)]),
  
  in4:new FormControl("",
  [Validators.required,Validators.pattern("[A-Za-z0-9-]*")]),
  
  in5:new FormControl("",
  [Validators.required,Validators.pattern("([+]{1})(380)([0-9]{9})$")]),
  
  in6:new FormControl("",
  [Validators.required,Validators.pattern('(["https://www."]{12})([!-~]*)$')]),
  
  in7:new FormControl("",
  [Validators.required])

});











  constructor() { 


  }

  
  ngOnInit(): void {
   
 
 (this.form.get("in2") as FormControl).setValidators((control:AbstractControl)=>{
  return ((this.form.get("in3") as FormControl).status=="VALID") &&  (this.form.get("in3") as FormControl).value!="" ? null:{custom:"passwords don't match"};
    
  }); 
  //console.log(this.form.get("in2") as FormControl);


 (this.form.get("in3") as FormControl).setValidators((control:AbstractControl)=>{
  return ((this.form.get("in2") as FormControl).value ==(this.form.get("in3") as FormControl).value) &&  (this.form.get("in3") as FormControl).value!="" ? null:{custom:"passwords don't match"};
    
  });


(this.form as FormGroup).valueChanges.subscribe(()=>{
//console.log(this.form.get("in2") as FormControl);
if((this.form.get("in2") as FormControl).value==(this.form.get("in3") as FormControl).value){
  (<HTMLInputElement>document.querySelector("form > section > .net.net.net")).style.borderColor="lightGray";
}
else{
 //  if((<HTMLInputElement>document.querySelector("form>input:nth-child(2)")).id=="exceptionFpasses"){
 //   (<HTMLInputElement>document.querySelector("form>input:nth-child(2)")).removeAttribute('id');
 // }
}

if((this.form.get("in2") as FormControl).value==(this.form.get("in3") as FormControl).value &&(<HTMLInputElement>document.querySelector("#spec")).checked && (this.form.get("in3") as FormControl).value!=""){
(<HTMLSelectElement>document.querySelector("form>button")).disabled=false;
(<HTMLSelectElement>document.querySelector("form>button")).style.backgroundColor="green";
}
else{
if(!((this.form.get("in2") as FormControl).value==(this.form.get("in3") as FormControl).value && (<HTMLInputElement>document.querySelector("#spec")).checked && (this.form.get("in7") as FormControl).status=="VALID")){
  (<HTMLSelectElement>document.querySelector("form>button")).disabled=true;
  (<HTMLSelectElement>document.querySelector("form>button")).style.backgroundColor="royalBlue"
}

}


});





}




}

