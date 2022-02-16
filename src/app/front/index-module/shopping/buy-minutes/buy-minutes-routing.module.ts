import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetMinutesComponent } from './get-minutes/get-minutes.component';

const routes: Routes = [
  {
    path:"",
    component:GetMinutesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyMinutesRoutingModule { }
