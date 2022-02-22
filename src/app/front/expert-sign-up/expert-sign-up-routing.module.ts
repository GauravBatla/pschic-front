import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpertSignComponent } from './expert-sign/expert-sign.component';

const routes: Routes = [
  {
    path: "",
    component: ExpertSignComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ExpertSignUpRoutingModule { }
