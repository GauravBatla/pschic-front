import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailChangeComponent } from './email-change/email-change.component';

const routes: Routes = [
  {
    path:"",
    component:EmailChangeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeEmailRoutingModule { }
