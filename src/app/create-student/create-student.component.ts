import { Component } from '@angular/core';
import { StudentApiService } from '../student-api.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {

  constructor(private studentService:StudentApiService , private _route:Router){}

  public studentForm: FormGroup=new FormGroup(
    {
      name:new FormControl(),
      phone:new FormControl(),
      city:new FormControl(),
      dob:new FormControl(),
      email:new FormControl(),
      school_logo:new FormControl(),
      school_name:new FormControl(),
      school_city:new FormControl(),
      school_pin:new FormControl()
    }
  )
  create(){
    console.log(this.studentForm.value);
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
