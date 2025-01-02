import { Component } from '@angular/core';

@Component({
  selector: 'app-caliculator',
  templateUrl: './caliculator.component.html',
  styleUrls: ['./caliculator.component.css']
})
export class CaliculatorComponent {

  result:number=0;
  number1:number=0;
  number2:number=0;
  // isTrue:boolean=false;
  sum(){
    this.result=this.number1+this.number2;
    console.log(this.result);
  }
  multiplication(){
    this.result=this.number1*this.number2;
    console.log(this.result);
  }
  Substraction(){
    this.result=this.number1-this.number2;
    console.log(this.result);
  }
  division(){
    this.result=this.number1/this.number2;
    console.log(this.result);
  }

}
