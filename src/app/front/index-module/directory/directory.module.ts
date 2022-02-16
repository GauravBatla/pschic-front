import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectoryRoutingModule } from './directory-routing.module';
import { GetDirectoryComponent } from './get-directory/get-directory.component';


@NgModule({
  declarations: [
    GetDirectoryComponent
  ],
  imports: [
    CommonModule,
    DirectoryRoutingModule
  ]
})
export class DirectoryModule { }
