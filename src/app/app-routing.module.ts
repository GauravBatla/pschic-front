import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: "",
    loadChildren: () => import('../app/front/front-routing.module').then(m => m.FrontRoutingModule)
  },
  {
    path: "expert",// canActivate: [AuthGuard],
    loadChildren: () => import('../app/front/experts/experts-routing.module').then(m => m.ExpertsRoutingModule)
  },
  {
    path: "user",
    loadChildren: () => import('../app/front/index-module/my-pannel/my-pannel.module').then(m => m.MyPannelModule)
  },
  {
    path: "buy",
    loadChildren: () => import('../app/front/index-module/shopping/shopping.module').then(m => m.ShoppingModule)
  },
  {
    path: "auth",
    loadChildren: () => import('../app/auth/auth.module').then(m => m.AuthModule)
  }
  ,
  // {
  //   path:"",
  //   component:AppComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
