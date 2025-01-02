import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css'],
})
export class CircleComponent {
  radius: number = 0;
  result: number = 0;
  areaSubmit() {
    this.result = Math.PI * this.radius * this.radius;
    console.log(this.result);
  }
  perimeterSubmit() {
    this.result = 2 * Math.PI * this.radius;
    console.log(this.result);
  }
}
