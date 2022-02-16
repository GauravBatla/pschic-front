import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "mail",
    loadChildren:()=>import('./my-inbox/my-inbox.module').then(m=>m.MyInboxModule)
  },
  {
    path:"chat",
    loadChildren:()=>import('./chat-history/chat-history.module').then(m=>m.ChatHistoryModule)
  },
  {
    path:"personal",
    loadChildren:()=>import('./my-info/my-info.module').then(m=>m.MyInfoModule)
  },
  {
    path:"bank",
    loadChildren:()=>import('./my-bank/my-bank.module').then(m=>m.MyBankModule)
  },
  {
    path:"expert",
    loadChildren:()=>import('./my-experts/my-experts.module').then(m=>m.MyExpertsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyPannelRoutingModule { }
