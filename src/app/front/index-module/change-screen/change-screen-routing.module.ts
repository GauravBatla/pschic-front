import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreenChangeComponent } from './screen-change/screen-change.component';

const routes: Routes = [
  {
    path:"",
    component:ScreenChangeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeScreenRoutingModule { }
