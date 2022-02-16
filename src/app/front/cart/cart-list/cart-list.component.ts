import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  data: any
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.cartLIst()
  }
  cartLIst() {
    this.authService.GetCart().subscribe((res: any) => {
      if (res) {
        console.log(res);

        this.data = res.result
      }
    })
  }

  remove(id: any) {
    this.authService.deleteCart(id).subscribe((res) => {
      if (res) {
        this.cartLIst()
      }
    })
  }
}
