import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpertSignUpRoutingModule } from './expert-sign-up-routing.module';
import { ExpertSignComponent } from './expert-sign/expert-sign.component';
import { AngularMaterialUi } from 'src/angular-material/angular.material.module';


@NgModule({
  declarations: [
    ExpertSignComponent
  ],
  imports: [
    CommonModule,
    ExpertSignUpRoutingModule,
    AngularMaterialUi,

  ]
})
export class ExpertSignUpModule { }
