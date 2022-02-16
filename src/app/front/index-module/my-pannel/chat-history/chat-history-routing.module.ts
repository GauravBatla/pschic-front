import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryListingComponent } from './history-listing/history-listing.component';

const routes: Routes = [
  {
    path:"history",
    component:HistoryListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatHistoryRoutingModule { }
