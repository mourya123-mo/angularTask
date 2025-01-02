import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {

  weight:any=0;
  height:any=0;
 result:string="";
 bmi:number=0;

   submit(){
   
   this.bmi=this.weight/(this.height*this.height);
    console.log(this.result);

    if(this.bmi<18.5 && this.bmi>0){
        this.result="underweight";
    }else  if(this.bmi>18.5 && this.bmi<30){
         this.result="Normal";
    }else  if(this.bmi>30 && this.bmi<35){
        this.result="obese"
    }else  if(this.bmi>=35 && this.bmi<40){
        this.result="severely obese"
    }else  if(this.bmi>=40){
        this.result="Moribidly obese"
    }else{
        alert("Error");
    }
    
}
}
