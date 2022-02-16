import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsConditionsRoutingModule } from './terms-conditions-routing.module';
import { TermsconditionComponent } from './termscondition/termscondition.component';
// import { ChatUsComponent } from 'src/app/chat-us/chat-us.component';


@NgModule({
  declarations: [
    TermsconditionComponent,
    
  ],
  imports: [
    CommonModule,
    TermsConditionsRoutingModule,
    // ChatUsComponentCallActionComponent
    
  ],
  exports: [
    
    // ChatUsComponent
    
  ]
})
export class TermsConditionsModule { }
