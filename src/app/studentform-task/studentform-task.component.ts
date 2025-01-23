import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-studentform-task',
  templateUrl: './studentform-task.component.html',
  styleUrls: ['./studentform-task.component.css']
})
export class StudentformTaskComponent {
    public studentForm:FormGroup=new FormGroup({
      name:new FormControl('', Validators.required),
      fatherName:new FormControl('', Validators.required),
      class:new FormControl('', Validators.required),
      email:new FormControl('', [Validators.required, Validators.email]),
      dob:new FormControl('', Validators.required),
      mobile:new FormControl('', [Validators.required,Validators.minLength(1000000000),Validators.maxLength(9999999999)]),
      address:new FormGroup({
        addressLine:new FormControl('', Validators.required),
        city:new FormControl('', Validators.required),
        state:new FormControl('', Validators.required),
        pincode:new FormControl('', Validators.required)
      }),
      marks:new FormArray([]),
      type:new FormControl()
    });

    get marksFormArray(){
      return this.studentForm.get('marks') as FormArray;
    }
    addMarks(){
      this.marksFormArray.push(
        new FormGroup({
          class:new FormControl(),
          year:new FormControl(),
          percentage:new FormControl()
        })
      )
    } 

    delete(i:number){
        this.marksFormArray.removeAt(i);
    }
  constructor(){
    this.studentForm.get('type')?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='dayScholor'){
          this.studentForm.addControl('bussfee',new FormControl());
          this.studentForm.removeControl('hostelfee')
        }else{
          this.studentForm.addControl('hostelfee',new FormControl())
          this.studentForm.removeControl('bussfee')
        }
      }
    )
  }


    create(){
      
        console.log(this.studentForm.value);
      
      
     
    }
}
