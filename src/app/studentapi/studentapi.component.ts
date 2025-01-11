import { Component } from '@angular/core';
import { StudentApiService } from '../student-api.service';

@Component({
  selector: 'app-studentapi',
  templateUrl: './studentapi.component.html',
  styleUrls: ['./studentapi.component.css']
})
export class StudentapiComponent {
  students:any=[];
 constructor(private studentService:StudentApiService){
  this.pageLoad();
 }
 pageLoad(){
  this.studentService.getStudents().subscribe(
    (data:any)=>{
      this.students=data;
      console.log(this.students);
    },(err:any)=>{
      console.log("internal error");
    }
  )
 }
 deleteStudent( id:number){
  if (confirm('are you sure to delete')==true){
    this.studentService.delete(id).subscribe(
      (data:any)=>{
        alert("Record deleted sucessful")
        this.pageLoad();
      },(err:any)=>{
          alert("internal server error");
      }
    )
  }else{
    alert('you have cancelled')
  }
  
   }
   term:string="";
   filter(){
    this.studentService.filterStudent(this.term).subscribe(
      (data:any)=>{
        this.students=data;
        console.log(this.students);
      }
    )
   }

   column:string="";
   order:string="";
   sort(){
    this.studentService.sortStudent(this.column,this.order).subscribe(
      (data:any)=>{
        this.students=data;
        console.log(this.students);
      }
    )
   }
   limit:number=0;
   page:number=0;
   pagenation(){
    this.studentService.getPaginatedStudents(this.limit, this.page).subscribe(
      (data:any)=>{
        this.students=data;
        console.log(this.students);
      },(err:any)=>{
        alert("Internal server error");
      }
      
    )
   }

  }
 

 

