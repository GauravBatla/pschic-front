import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor(private authService: AuthService) { }
  catDetail: any
  proDetail: any
  ngOnInit(): void {
    this.catList()
    this.getAllList()
  }

  catList() {
    this.authService.productCatList().subscribe((res: any) => {
      console.log(res);
      //  this.temp_dis = true
      let result = res
      if (res) {
        this.catDetail = res.result
      }
    })
  }
  getAllList() {
    this.authService.AllproductList().subscribe((res: any) => {
      if (res) {
        console.log(res);
        this.proDetail = res.result
      }
    })
  }
  productList(id: any) {
    console.log(id, "id");

    this.authService.productList(id).subscribe((res: any) => {
      console.log(res);
      //  this.temp_dis = true
      let result = res
      if (res) {
        this.proDetail = res.result
      }
    })
  }

  getList(id: any) {
    this.productList(id)
    console.log("is clicked");

  }
  cart(product_id:Number , price:Number , image:String) {
    let opt = {
      product_id:product_id,
      price:price,
      image:image
    }
    // console.log("clicked",opt);
    this.authService.addProduct(opt).subscribe((res)=>{
      if(res){
        alert('Added product')
      }
    },
    )
  }
}
