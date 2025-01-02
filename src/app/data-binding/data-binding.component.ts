import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  name:string="Mourryaw";
  age:number=28;
  email:string="mouryarecharla97@gmail.com";
  isIndian:boolean=true;
  phone:string='+91';
  // user:any={
  //   name:"Mourryaw",
  //   age:28,
  //   email:"mouryarecharla97@gmail.com",

  // }
   submit(){
    alert("clicked submit button")
   }
   typing(){
    alert("typing.....................")
   }

   num1:number=0;
   num2:number=0;
   result:number=0;

   sum(){
    this.result=this.num1+this.num2;
    console.log(this.result);
   }
}
