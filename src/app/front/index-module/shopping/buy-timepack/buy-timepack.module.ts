import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyTimepackRoutingModule } from './buy-timepack-routing.module';
import { ItimepacksComponent } from './itimepacks/itimepacks.component';


@NgModule({
  declarations: [
    ItimepacksComponent
  ],
  imports: [
    CommonModule,
    BuyTimepackRoutingModule
  ]
})
export class BuyTimepackModule { }
