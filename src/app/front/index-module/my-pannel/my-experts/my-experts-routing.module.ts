import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpertsListingComponent } from './experts-listing/experts-listing.component';

const routes: Routes = [
  {
    path:"listing",
    component:ExpertsListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyExpertsRoutingModule { }
