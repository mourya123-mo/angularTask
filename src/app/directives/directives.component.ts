import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  age:number=30;

  ages:number[]=[10,20,30,40,50];

  states:string[]=['andhraPradesh','telangana','karnataka','tamilnadu'];

  products:any[]=[
    {productName:'book',price:20},
    {productName:'shirt',price:2000},
    {productName:'mobile',price:50000},
    {productName:'bike',price:200000},
    {productName:'car',price:5000000},

  ]

}
