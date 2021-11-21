import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //title = 'HW';
public display1():void{
  (<HTMLSelectElement>document.querySelector(".class1")).style.display="initial";
  (<HTMLSelectElement>document.querySelector(".class2")).style.display="none";
}
public display2():void{
  (<HTMLSelectElement>document.querySelector(".class2")).style.display="initial";
  (<HTMLSelectElement>document.querySelector(".class1")).style.display="none";
}

constructor(){

}

}
