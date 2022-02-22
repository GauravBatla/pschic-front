import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyBankRoutingModule } from './my-bank-routing.module';
import { BankAccountComponent } from './bank-account/bank-account.component';
import { AngularMaterialUi } from 'src/angular-material/angular.material.module';


@NgModule({
  declarations: [
    BankAccountComponent
  ],
  imports: [
    CommonModule,
    MyBankRoutingModule,
    AngularMaterialUi,
  ]
})
export class MyBankModule { }
