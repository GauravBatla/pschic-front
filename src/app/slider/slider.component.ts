import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  show = true
  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.addItem()
  }
  // addItem() {
  //   this.router.url === '/home'
  //   console.log(this.router.url == '/home');
  //   this.show = true
  // }

}
