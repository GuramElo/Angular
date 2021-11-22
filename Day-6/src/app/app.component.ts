import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
public tsk:any={
  tsk1:false,
  tsk2:false,
  tsk3:false,
  tsk4:false,
  tsk5:false,
}
  
public display(num:any):void{
  
  for(let i=1;i<6;i++){this.tsk[`tsk${i}`]=false;}

  this.tsk[`tsk${num}`]=true;

}

constructor(){

}

}
