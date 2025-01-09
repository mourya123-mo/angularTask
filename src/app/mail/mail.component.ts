import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MailserviceService } from '../mailservice.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {
mails:any=[];
 constructor(private _mailService:MailserviceService){
  _mailService.getMail().subscribe(
    (data:any)=>{
      this.mails=data;
      console.log(this.mails);
    }
  )
 }

}
