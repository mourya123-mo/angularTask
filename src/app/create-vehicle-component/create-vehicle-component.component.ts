import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-vehicle-component',
  templateUrl: './create-vehicle-component.component.html',
  styleUrls: ['./create-vehicle-component.component.css']
})
export class CreateVehicleComponentComponent {
  id:number=0;
  constructor(_activatedRoute:ActivatedRoute,private _vehiservice:VehicleService ,private _router:Router){
    // capturing id with activated routes
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;
        // intigrating api
        _vehiservice.getVehicle(data.id).subscribe(
          (data:any)=>{
            console.log(data);
            // display the data in the form
            this.vehicleForm.patchValue(data);
          }
        )
      }
     
    )
  }

  public vehicleForm:FormGroup=new FormGroup(
    {
      Vehicle: new FormControl(),
      manufacturer:new FormControl(),
      model:new FormControl(),
      type:new FormControl(),
      fuel:new FormControl(),
      color:new FormControl(),
      image:new FormControl(),
      cost:new FormControl(),

    }
  )
  create(){
     // update Vehicle
   if(this.id){
   this._vehiservice.updateVehicle(this.id,this.vehicleForm.value).subscribe(
    (data:any)=>{
      alert("Updated Sucessfully");
      this._router.navigateByUrl("/dashboard/vehicle");
    },(err:any)=>{
      alert("internal Service Error")
    }
   )

   }else{

    this._vehiservice.createVehicle(this.vehicleForm.value).subscribe(
      (data:any)=>{
        console.log(data);
        alert("vehicle craeted sucessfully")
        this._router.navigateByUrl("/dashboard/vehicle");

      },(err:any)=>{
        console.log("internal server error");
      }
    )
   }
    
      }
    }
  

