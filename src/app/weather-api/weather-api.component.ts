import { Component } from '@angular/core';
import { WeatherApiService } from '../weather-api.service';

@Component({
  selector: 'app-weather-api',
  templateUrl: './weather-api.component.html',
  styleUrls: ['./weather-api.component.css'],
})
export class WeatherApiComponent {
  weathers: any = {};
  time: Date = new Date();
  constructor(private weatherService: WeatherApiService) {
    weatherService.getWeather().subscribe((data: any) => {
      this.weathers = data;
      console.log(this.weathers);
    });
  }
}
