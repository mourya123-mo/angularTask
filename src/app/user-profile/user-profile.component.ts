import { Component } from '@angular/core';
import { UserProfileService } from '../user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  users:any=[];
  // emailprivate:any;
  constructor(private userProfile:UserProfileService){
    userProfile.getUsers().subscribe(
      (data:any)=>{
        this.users=data;
        console.log(this.users);
      }
    )
  }

}
