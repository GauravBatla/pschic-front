import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialUi } from 'src/angular-material/angular.material.module';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
// import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from './footer/footer.component';
// import { ChatUsComponent } from '../chat-us/chat-us.component';

@NgModule({
  declarations: [
    // HeaderComponent,
    // FooterComponent
    // ChatUsComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FrontRoutingModule,
    AngularMaterialUi,
    SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule ,
    BrowserModule,
    
  ]
})
export class FrontModule { }
