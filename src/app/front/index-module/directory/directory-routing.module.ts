import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetDirectoryComponent } from './get-directory/get-directory.component';

const routes: Routes = [
  {
    path:"",
    component:GetDirectoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectoryRoutingModule { }
