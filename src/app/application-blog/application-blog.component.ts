import { Component } from '@angular/core';
import { ApplicationBlogService } from '../application-blog.service';

@Component({
  selector: 'app-application-blog',
  templateUrl: './application-blog.component.html',
  styleUrls: ['./application-blog.component.css']
})
export class ApplicationBlogComponent {
  blogs:any=[];
  constructor(private blogService:ApplicationBlogService){
    blogService.getBlog().subscribe(
      (data:any)=>{
        this.blogs=data;
        console.log(this.blogs);
      }
    )
  }
}
