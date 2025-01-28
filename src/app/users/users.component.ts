import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { tcsMail } from '../validators';
import { passwordValidator } from '../passwordValidator';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  public userForm:FormGroup=new FormGroup({
    name:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email,tcsMail]),
    password:new FormControl('',[Validators.required,passwordValidator]),
    mobile:new FormControl('',[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]),
    adress:new FormGroup({
      village:new FormControl(''),
      district:new FormControl(''),
      state:new FormControl(''),
      pincode:new FormControl('')
    }),
    type:new FormControl(),
    cards:new FormArray([])
  });

  get cardFormArray(){
    return this.userForm.get('cards') as FormArray;
  }
addCard(){
  this.cardFormArray.push(
    new FormGroup({
      number:new FormControl(),
      expiry:new FormControl(),
      cvv:new FormControl()
    })
  )
}
delete(i:number){
  this.cardFormArray.removeAt(i);
}
  constructor(){
    this.userForm.get('type')?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='dayscholar'){
          this.userForm.addControl('bussfee',new FormControl());
          this.userForm.removeControl('hostelfee');
        }else{
          this.userForm.addControl('hostelfee',new FormControl());
          this.userForm.removeControl('bussfee');
        }
      }
    )
  }

  create(){
    console.log(this.userForm);
  }

  user:User={
    name: '',
    age: 0
  }

  
}
