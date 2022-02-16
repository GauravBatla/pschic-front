import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpertsRoutingModule } from './experts-routing.module';
import { PopularExpertsComponent } from './popular-experts/popular-experts.component';
import { PreferedExpertsComponent } from './prefered-experts/prefered-experts.component';
import { PremierExpertsComponent } from './premier-experts/premier-experts.component';


@NgModule({
  declarations: [
    PopularExpertsComponent,
    PreferedExpertsComponent,
    PremierExpertsComponent
  ],
  imports: [
    CommonModule,
    ExpertsRoutingModule
  ]
})
export class ExpertsModule { }
