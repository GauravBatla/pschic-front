import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyInfoRoutingModule } from './my-info-routing.module';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';


@NgModule({
  declarations: [
    PersonalDetailComponent
  ],
  imports: [
    CommonModule,
    MyInfoRoutingModule
  ]
})
export class MyInfoModule { }
