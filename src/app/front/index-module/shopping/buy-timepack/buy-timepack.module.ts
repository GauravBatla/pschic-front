import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyTimepackRoutingModule } from './buy-timepack-routing.module';
import { ItimepacksComponent } from './itimepacks/itimepacks.component';
import { AngularMaterialUi } from 'src/angular-material/angular.material.module';


@NgModule({
  declarations: [
    ItimepacksComponent
  ],
  imports: [
    CommonModule,
    BuyTimepackRoutingModule,
    AngularMaterialUi,

  ]
})
export class BuyTimepackModule { }
