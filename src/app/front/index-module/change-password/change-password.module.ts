import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangePasswordRoutingModule } from './change-password-routing.module';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { AngularMaterialUi } from 'src/angular-material/angular.material.module';


@NgModule({
  declarations: [
    PasswordChangeComponent
  ],
  imports: [
    CommonModule,
    ChangePasswordRoutingModule,
    AngularMaterialUi

  ]
})
export class ChangePasswordModule { }
