import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {
    path: "",
    loadChildren: () => import('./index-module/index-module.module').then(m => m.IndexModuleModule)
  },
  {
    path: "expert",
    loadChildren: () => import('./experts/experts.module').then(m => m.ExpertsModule)
  },
  {
    path:"terms-conditions",
    loadChildren:()=>import('./terms-conditions/terms-conditions.module').then(m=>m.TermsConditionsModule)
  },
  {
    path:"cart",
    loadChildren:()=>import('./cart/cart.module').then(m=>m.CartModule)
  }
  // {
  //   path:"login",
  //   component:LoginComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
