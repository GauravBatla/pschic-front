import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  slider:string = "assets/img/slider-1.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
