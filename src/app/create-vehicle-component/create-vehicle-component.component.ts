import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-vehicle-component',
  templateUrl: './create-vehicle-component.component.html',
  styleUrls: ['./create-vehicle-component.component.css']
})
export class CreateVehicleComponentComponent {

  constructor(private _vehiservice:VehicleService ,private _router:Router){}

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
    console.log(this.vehicleForm.value);
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
  

