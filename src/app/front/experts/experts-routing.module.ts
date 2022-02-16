import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularExpertsComponent } from './popular-experts/popular-experts.component';
import { PreferedExpertsComponent } from './prefered-experts/prefered-experts.component';
import { PremierExpertsComponent } from './premier-experts/premier-experts.component';

const routes: Routes = [
  {
    path: "popular",
    component: PopularExpertsComponent
  },
  {
    path: "premier",
    component: PremierExpertsComponent
  },
  {
    path: "prefered",
    component: PreferedExpertsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpertsRoutingModule { }
