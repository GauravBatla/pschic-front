import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyExpertsRoutingModule } from './my-experts-routing.module';
import { ExpertsListingComponent } from './experts-listing/experts-listing.component';


@NgModule({
  declarations: [
    ExpertsListingComponent
  ],
  imports: [
    CommonModule,
    MyExpertsRoutingModule
  ]
})
export class MyExpertsModule { }
