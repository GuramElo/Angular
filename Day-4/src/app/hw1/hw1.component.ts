import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Validators,FormControl,AbstractControl, FormGroup } from '@angular/forms';
import { OnChanges } from '@angular/core';
import { pipe } from 'rxjs';
import { a } from './CurrSigns';
//import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-hw1',
  templateUrl: './hw1.component.html',
  styleUrls: ['./hw1.component.scss']
})
export class HW1Component implements OnInit {
public lastFun(){
let ako=(<HTMLSelectElement>document.querySelector("#lastsFun")).value;
this.aso.push(ako);


}
//===========================
public aso:any[]=[];


public grp:FormGroup=new FormGroup({
  ase:new FormControl("0"),
});




//===========================
  //public abara:any;



public buttArrow():void{
(<HTMLSelectElement>document.querySelector("#valueInput1")).value='0';
(<HTMLSelectElement>document.querySelector("#valueInput2")).value='0';
(<HTMLSelectElement>document.querySelector("#txt1")).innerText=this.access[((<HTMLSelectElement>document.querySelector("#cur1")).value)];
(<HTMLSelectElement>document.querySelector("#txt2")).innerText=this.access[((<HTMLSelectElement>document.querySelector("#cur2")).value)];
//console.log(a);
//this.cur1Typ.patchValue(this.cur2Typ.value,{emitEvent:false});
//this.cur2Typ.patchValue(a,{emitEvent:false});
};




  public access:any=a;

  private fun:any=():void=>{
  
    let Atype=((<HTMLSelectElement>document.querySelector("#cur1")).value);
    let Btype=((<HTMLSelectElement>document.querySelector("#cur2")).value); 
    let In=((<HTMLSelectElement>document.querySelector(`#valueInput${this.boolFight ? 1:2}`)));
    let nim=(Number(this.ObjArray[Btype].rate/this.ObjArray[Btype].quantity)/Number(this.ObjArray[Atype].rate/this.ObjArray[Atype].quantity));
    nim=!this.boolFight? 1/nim:nim;
    (In.value as any)=(((<HTMLSelectElement>document.querySelector(`#valueInput${this.boolFight ? 2:1}`))) as any).value*nim;
(<HTMLSelectElement>document.querySelector("#txt2")).innerText=this.access[Btype]+"  "+In.value+" "+this.ObjArray[Btype].name;
(<HTMLSelectElement>document.querySelector("#txt1")).innerText=this.access[Atype]+"  "+((<HTMLSelectElement>document.querySelector(`#valueInput${this.boolFight ? 2:1}`))).value+" "+this.ObjArray[Atype].name;
//console.log(this.access["USD"]);
};
  







private boolFight:boolean=true;
public cur1Val:FormControl=new FormControl(0);
public cur2Val:FormControl=new FormControl(0);
public cur1Typ:FormControl=new FormControl("EUR");
public cur2Typ:FormControl=new FormControl("USD");


ObjArray:any={};
  
constructor(private http:HttpClient) {
 // console.log(a);
   
}
currAdd(val:string):void{
let a=document.createElement("option"),b=document.createElement("option"),c=document.createElement("option");
a.innerText=val;
b.innerText=val;
c.innerText=val;
if(val=="EUR")a.selected=true;
if(val=="USD"){b.selected=true;c.selected=true;}
//a.textContent=val;
//b.textContent=val;
(<HTMLSelectElement>document.querySelector("#cur1")).appendChild(a);

(<HTMLSelectElement>document.querySelector("#cur2")).appendChild(b);

(<HTMLSelectElement>document.querySelector("#lastsFun")).appendChild(c);
}

  ngOnInit(): void {
//=========================
//document.createElement("input")

this.grp.valueChanges.subscribe(()=>{
let a:any=(document.querySelectorAll("section>div>input"));
let b:any=(document.querySelectorAll("section>div>span"));
let sum=0,count=0;
let arr1:any[]=[],arr2:any[]=[];
for(let i of a){
arr1.push(Number(i.value));
console.log(typeof Number(i.value));
}

for(let i of b){
sum+=arr1[count]*(this.ObjArray[i.innerText].rate/this.ObjArray[i.innerText].quantity);
count++;
//arr2.push(Number(i.innerText));
//console.log(i.innerText);
}

//for(let i=0;i<arr1.length;i++){
//  sum+=arr1[i]*(this.ObjArray[`GEL`]?.rate);
//  //console.log(this.ObjArray[]);
//}
//console.log(sum);
(<HTMLSelectElement>document.querySelector("#summs")).innerText="სულ:  "+sum+" ლარი";
}
);
//this.abara=(<HTMLSelectElement>document.querySelector("#SumCurs>div"));
//this.abara 

//=========================

    this.cur1Val.setValidators((control:AbstractControl)=>{
      return ((typeof (this.cur1Val.value)=="number")) ? null:{custom:"Invalid Input"};
        
      });
      this.cur2Val.setValidators((control:AbstractControl)=>{
        return ((typeof (this.cur2Val.value)=="number")) ? null:{custom:"Invalid Input"};
          
        });
    this.http.get<any>('https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/ka/json').subscribe(data => {
    for(let i of data[0].currencies){
      this.currAdd((i.code));
      this.ObjArray[i.code]=i;
    }


this.ObjArray["GEL"]={
  code:"GEL",
  quantity: 1,
rate: 1,
name:"ქართული ლარი"
};
this.currAdd("GEL")
console.log(this.ObjArray);

  });
//======
this.cur1Val.valueChanges.subscribe((s)=>{
 
this.boolFight=false;
let Atype=((<HTMLSelectElement>document.querySelector("#cur1")).value);
let Btype=((<HTMLSelectElement>document.querySelector("#cur2")).value); 
let In=((<HTMLSelectElement>document.querySelector("#valueInput2")));
let nim=(Number(this.ObjArray[Btype].rate/this.ObjArray[Btype].quantity)/Number(this.ObjArray[Atype].rate/this.ObjArray[Atype].quantity));
(In.value as any)=s/nim;

(<HTMLSelectElement>document.querySelector("#txt2")).innerText=this.access[Btype]+"  "+In.value+" "+this.ObjArray[Btype].name;
(<HTMLSelectElement>document.querySelector("#txt1")).innerText=this.access[Atype]+"  "+((<HTMLSelectElement>document.querySelector("#valueInput1"))).value+" "+this.ObjArray[Atype].name;

});

this.cur2Val.valueChanges.subscribe((s)=>{
  this.boolFight=true;
  let Atype=((<HTMLSelectElement>document.querySelector("#cur1")).value);
  let Btype=((<HTMLSelectElement>document.querySelector("#cur2")).value); 
  let In=((<HTMLSelectElement>document.querySelector("#valueInput1")));
  let nim=(Number(this.ObjArray[Btype].rate/this.ObjArray[Btype].quantity)/Number(this.ObjArray[Atype].rate/this.ObjArray[Atype].quantity));
  (In.value as any)=s*nim;
  (<HTMLSelectElement>document.querySelector("#txt1")).innerText=this.access[Atype]+"  "+In.value+" "+this.ObjArray[Atype].name;
  (<HTMLSelectElement>document.querySelector("#txt2")).innerText=this.access[Btype]+"  "+((<HTMLSelectElement>document.querySelector("#valueInput2"))).value+" "+this.ObjArray[Btype].name;
});


this.cur1Typ.valueChanges.subscribe(this.fun);

this.cur2Typ.valueChanges.subscribe(this.fun);


}



}
