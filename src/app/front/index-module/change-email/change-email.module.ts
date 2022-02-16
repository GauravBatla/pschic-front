import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeEmailRoutingModule } from './change-email-routing.module';
import { EmailChangeComponent } from './email-change/email-change.component';
import { AngularMaterialUi } from 'src/angular-material/angular.material.module';

@NgModule({
  declarations: [
    EmailChangeComponent,

  ],
  imports: [
    CommonModule,
    ChangeEmailRoutingModule,
    AngularMaterialUi,
    // SliderComponent

  ]
})
export class ChangeEmailModule { }
