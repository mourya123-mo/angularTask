import { Component } from '@angular/core';
import { IMDBService } from '../imdb.service';

@Component({
  selector: 'app-imdb',
  templateUrl: './imdb.component.html',
  styleUrls: ['./imdb.component.css']
})
export class IMDBComponent {
movies:any=[];
  constructor(private imdbService:IMDBService){
    imdbService.getRaeting().subscribe((data:any)=>{
        this.movies=data;
        console.log(this.movies);
    })
   
  }
  getRatings(ratings:number){
    return Math.floor(ratings);
  }
}
