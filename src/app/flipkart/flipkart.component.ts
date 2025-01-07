import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {

  products: any = [
    { productname: 'pen', price: 10, rating: 3, freedelivery: true },
    { productname: 'phone', price: 20000, rating: 4, freedelivery: false },
    { productname: 'shirt', price: 2000, rating: 5, freedelivery: false },
    { productname: 'cap', price: 2000000, rating: 3, freedelivery: true },
    { productname: 'mobile case', price: 1000, rating: 3, freedelivery: true },
    { productname: 'remote', price: 150, rating: 4.5, freedelivery: false },
  ];

  delete(i:number){
     this.products.splice(i,1);
  }

  name:any="";
  productsFilter(){
  this.products=  this.products.filter((product:any)=>product.productname.includes(this.name));
  }

  delivery(){
  this.products=  this.products.filter((product:any)=>product.freedelivery==true)
  }

  lth(){
     this.products.sort((a:any,b:any)=>a.price-b.price);
  }

  htl(){
    this.products.sort((a:any,b:any)=>b.price-a.price);
 }
 rhtl(){
  this.products.sort((a:any,b:any)=>b.rating-a.rating);
 }
 rlth(){
  this.products.sort((a:any,b:any)=>a.rating-b.rating);
 }
 productSum(){
  alert(this.products.reduce((sum:any,product:any)=>sum+product.price,0))
 }


 totalItems(){
 alert(this.products.reduce((count:any)=>count+1,0))
  
 }

 discount(){
  this.products.map((product:any)=>{
    product.price=product.price/2;
    return product;
  })

 }
 charges(){
  this.products.map((product:any)=>{
    if(product.freedelivery==false){
      product.price=product.price+150;
    }
    return product;
  })

 }

 pname:string="";
 pprice:number=0;
 prating:number=0;
 pfreedelivery:any;

 add(){
let  product={
       productname:this.pname,
       price:this.pprice,
       rating:this.prating,
       freedelivery:this.pfreedelivery 
  }
  this.products.unshift(product);
 }

}
