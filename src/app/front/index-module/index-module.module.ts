import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexModuleRoutingModule } from './index-module-routing.module';
import { IndexDashboardComponent } from './index-dashboard/index-dashboard.component';
import { PopularExpertsComponent } from './popular-experts/popular-experts.component';
import { SliderComponent } from 'src/app/components/slider/slider.component';
import { LiveChatComponent } from 'src/app/components/live-chat/live-chat.component';
// import { SliderComponent } from './slider/slider.component';


@NgModule({
  declarations: [
    IndexDashboardComponent,
    PopularExpertsComponent,
    // ActionComponent

    // SliderComponent,
    // SliderComponent
  ],
  imports: [
    CommonModule,
    IndexModuleRoutingModule,
    // LiveChatComponent

  ]
})
export class IndexModuleModule { }
