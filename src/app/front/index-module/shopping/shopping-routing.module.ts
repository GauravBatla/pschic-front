import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"products",
    loadChildren:()=>import('./products/products.module').then(m=>m.ProductsModule)
  },
  {
    path:"minutes",
    loadChildren:()=>import('./buy-minutes/buy-minutes.module').then(m=>m.BuyMinutesModule)
  },
  {
    path:"timepack",
    loadChildren:()=>import('./buy-timepack/buy-timepack.module').then(m=>m.BuyTimepackModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
