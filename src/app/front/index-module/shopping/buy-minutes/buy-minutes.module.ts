import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyMinutesRoutingModule } from './buy-minutes-routing.module';
import { GetMinutesComponent } from './get-minutes/get-minutes.component';
import { AngularMaterialUi } from 'src/angular-material/angular.material.module';


@NgModule({
  declarations: [
    GetMinutesComponent
  ],
  imports: [
    CommonModule,
    BuyMinutesRoutingModule,
    AngularMaterialUi,

  ]
})
export class BuyMinutesModule { }
