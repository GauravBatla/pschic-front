import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { SliderComponent } from './slider/slider.component';



@NgModule({
  declarations: [
    CardComponent,
    SliderComponent
  ],
  exports:[
    CardComponent,
    SliderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedComponentsModule { }
