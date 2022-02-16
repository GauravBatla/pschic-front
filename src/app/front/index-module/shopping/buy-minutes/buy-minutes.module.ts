import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyMinutesRoutingModule } from './buy-minutes-routing.module';
import { GetMinutesComponent } from './get-minutes/get-minutes.component';


@NgModule({
  declarations: [
    GetMinutesComponent
  ],
  imports: [
    CommonModule,
    BuyMinutesRoutingModule
  ]
})
export class BuyMinutesModule { }
