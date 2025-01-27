import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  response:string='';
  term:string='';
store(value:number){
  alert(value);
}
catch(value:string){
this.response=value;
}
}
