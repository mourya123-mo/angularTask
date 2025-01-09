import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  vehicles:any=[];
  term:string="";
  column:string="";
  order:string="";
  constructor(private _vehicleSevice:VehicleService){
   this.pageLoad();
  }
  pageLoad(){
    this._vehicleSevice.getVehicles().subscribe(
      (data:any)=>{
        this.vehicles=data;
        console.log(this.vehicles);
      }
    )
  }
  filter(){
    this._vehicleSevice.getFilteredVehicles(this.term).subscribe(
      (data:any)=>{
        this.vehicles=data;
        console.log(this.vehicles);
      },(err:any)=>{
        alert("Internal service error")
      }
    )
  }
  sort(){
    this._vehicleSevice.getSortedVehicles(this.column,this.order).subscribe(
      (data:any)=>{
        this.vehicles=data;
        console.log(this.vehicles);
      },(err:any)=>{
        alert("Internal service error")
      }
    )
  }
  limit:number=0;
  page:number=0;
  pagination(){
    this._vehicleSevice.getPaginatedVehicle(this.limit,this.page).subscribe(
      (data:any)=>{
        this.vehicles=data;
        console.log(this.vehicles);
      },(err:any)=>{
        alert("Internal service error")
      }
    )
  }
  delete(id:number){
    if(confirm("are you sure to delete")==true){
      this._vehicleSevice.delete(id).subscribe((data:any)=>{
        alert("Record deleted sucessfully")
      },(err:any)=>{
        alert("Internal service error");
        this.pageLoad(); 
      }
    )
    }else{
      alert(" you have cancelled")
    }
  }
}
