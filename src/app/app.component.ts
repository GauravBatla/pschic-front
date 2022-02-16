import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'client';
  show: Boolean = false
name=''
  constructor(private router: Router) {

  }
  ngOnInit(): void {
    this.addItem()
  }
  addItem() {
    this.router.url === '/home'
    // console.log(name);
    
    // console.log(this.router.url === '/');
    // this.show = true
    this.router.url === '/' ? this.show = true : this.show = false
  }
}
