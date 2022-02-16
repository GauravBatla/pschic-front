import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermsconditionComponent } from './termscondition/termscondition.component';

const routes: Routes = [
  {
    path:"",
    component:TermsconditionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermsConditionsRoutingModule { }
