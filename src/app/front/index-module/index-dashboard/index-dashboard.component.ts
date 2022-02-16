import { Component, OnInit , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-index-dashboard',
  templateUrl: './index-dashboard.component.html',
  styleUrls: ['./index-dashboard.component.css']
})
export class IndexDashboardComponent implements OnInit {

  constructor() {
    // this.addNewItem(true)
   }

  ngOnInit(): void {
  }
  // @Output() newItemEvent = new EventEmitter<Boolean>();
  // addNewItem(value: Boolean) {
  //   this.newItemEvent.emit(value);
  // }
}
