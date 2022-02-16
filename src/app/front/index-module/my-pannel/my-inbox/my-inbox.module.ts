import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyInboxRoutingModule } from './my-inbox-routing.module';
import { MailboxComponent } from './mailbox/mailbox.component';


@NgModule({
  declarations: [
    MailboxComponent
  ],
  imports: [
    CommonModule,
    MyInboxRoutingModule
  ]
})
export class MyInboxModule { }
