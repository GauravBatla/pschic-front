import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItimepacksComponent } from './itimepacks/itimepacks.component';

const routes: Routes = [
  {
    path:"",
    component:ItimepacksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyTimepackRoutingModule { }
