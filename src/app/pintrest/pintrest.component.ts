import { Component } from '@angular/core';
import { PintrestServeiceService } from '../pintrest-serveice.service';

@Component({
  selector: 'app-pintrest',
  templateUrl: './pintrest.component.html',
  styleUrls: ['./pintrest.component.css']
})
export class PintrestComponent {
  products:any;
  constructor(private pintrustService:PintrestServeiceService){
    pintrustService.getProducts().subscribe(
      (data:any)=>{
        this.products=data;
        console.log(this.products);
      }
    )
  }

}
