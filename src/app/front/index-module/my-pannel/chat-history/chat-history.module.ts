import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatHistoryRoutingModule } from './chat-history-routing.module';
import { HistoryListingComponent } from './history-listing/history-listing.component';


@NgModule({
  declarations: [
    HistoryListingComponent
  ],
  imports: [
    CommonModule,
    ChatHistoryRoutingModule
  ]
})
export class ChatHistoryModule { }
