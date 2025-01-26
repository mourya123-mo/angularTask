import { Component } from '@angular/core';
import { StudentApiService } from '../student-api.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
  id:number=0;
  constructor(private studentService:StudentApiService , private _route:Router,private _activatedRoutr:ActivatedRoute){
      _activatedRoutr.params.subscribe(
        (data:any)=>{
          console.log(data.id);
          this.id=data.id;
          studentService.studentDetails(data.id).subscribe(
            (data:any)=>{
              console.log(data);

              this.studentForm.patchValue(data)
            }
          )
        }
      )
  }

  public studentForm: FormGroup=new FormGroup(
    {
      name:new FormControl(''),
      phone:new FormControl(''),
      city:new FormControl(''),
      dob:new FormControl(''),
      email:new FormControl(''),
      school_logo:new FormControl(''),
      school_name:new FormControl(''),
      school_city:new FormControl(''),
      school_pin:new FormControl(''),
      profile_picture:new FormControl('')
    }
  )
  submit(){
    console.log(this.studentForm.value);
    if(this.id){
      this.studentService.updateStudent(this.id,this.studentForm.value).subscribe(
        (data:any)=>{
          console.log(data);
          alert("updted sucessfully");
          this._route.navigateByUrl("/dashboard/student")
        },(err:any)=>{
          alert('Internal error');
        }
      )
      
    }else{
      this.studentService.createStudent(this.studentForm.value).subscribe(
        (data)=>{
          console.log(data);
          this._route.navigateByUrl("/dashboard/student");
        },(err:any)=>{
          alert("internal error");
        }
      )
    }
   
  }

}
