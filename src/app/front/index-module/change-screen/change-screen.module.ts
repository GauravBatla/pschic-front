import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeScreenRoutingModule } from './change-screen-routing.module';
import { ScreenChangeComponent } from './screen-change/screen-change.component';
import { AngularMaterialUi } from 'src/angular-material/angular.material.module';
import { LiveChatComponent } from 'src/app/components/live-chat/live-chat.component';


@NgModule({
  declarations: [
    ScreenChangeComponent,

  ],
  imports: [
    CommonModule,
    ChangeScreenRoutingModule,
    AngularMaterialUi,


  ],
  exports: [

  ]
})
export class ChangeScreenModule { }
