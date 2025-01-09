import { Component } from '@angular/core';
import { FlipkartApiserviceService } from '../flipkart-apiservice.service';

@Component({
  selector: 'app-flipkart-api',
  templateUrl: './flipkart-api.component.html',
  styleUrls: ['./flipkart-api.component.css']
})
export class FlipkartApiComponent {
  products:any=[];
 
  constructor(private  _flipkartService:FlipkartApiserviceService ){
    _flipkartService.getProducts().subscribe(
      (data:any)=>{
        this.products=data
          console.log(this.products);

        
       
        
        
      }
    );
     
  }

 
}
