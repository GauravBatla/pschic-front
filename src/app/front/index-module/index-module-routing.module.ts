import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexDashboardComponent } from './index-dashboard/index-dashboard.component';
import { PopularExpertsComponent } from './popular-experts/popular-experts.component';

const routes: Routes = [
  {
    path: "",
    component: IndexDashboardComponent
  },
  {
    path:"directory",
    loadChildren:()=>import('./directory/directory.module').then(m=>m.DirectoryModule)
  },
  {
    path:"changeScreen",
    loadChildren:()=>import('./change-screen/change-screen.module').then(m=>m.ChangeScreenModule)
  },
  {
    path:"changepassword",
    loadChildren:()=>import('./change-password/change-password.module').then(m=>m.ChangePasswordModule)
  },
  {
    path:"changeEmail",
    loadChildren:()=>import('./change-email/change-email.module').then(m=>m.ChangeEmailModule)
  }
  // {
  //   path:"PopularExperts",
  //   component:PopularExpertsComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexModuleRoutingModule { }
