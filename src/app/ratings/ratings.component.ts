import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent {

@Input() ratings:number=0;

convertRating(){
  this.ratings=Math.floor(this.ratings);
}
}
