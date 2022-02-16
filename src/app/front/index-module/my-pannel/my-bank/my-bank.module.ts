import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyBankRoutingModule } from './my-bank-routing.module';
import { BankAccountComponent } from './bank-account/bank-account.component';


@NgModule({
  declarations: [
    BankAccountComponent
  ],
  imports: [
    CommonModule,
    MyBankRoutingModule
  ]
})
export class MyBankModule { }
