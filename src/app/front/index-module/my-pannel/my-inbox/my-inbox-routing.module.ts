import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailboxComponent } from './mailbox/mailbox.component';

const routes: Routes = [
  {
    path:"box",
    component:MailboxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyInboxRoutingModule { }
