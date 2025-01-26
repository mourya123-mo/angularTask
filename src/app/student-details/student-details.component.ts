import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentApiService } from '../student-api.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  student:any=[]
  constructor(private _activatedRouter:ActivatedRoute,private _studentService:StudentApiService){
    _activatedRouter.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        _studentService.studentDetails(data.id).subscribe(
          (data:any)=>{
            this.student=data;
            console.log(this.student);
          }
        )
      }
    )
   }
  
}
