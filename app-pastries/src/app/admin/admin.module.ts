import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PastrieComponent } from './pastrie/pastrie.component';



@NgModule({
  declarations: [
    PastrieComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PastrieComponent
  ]
})
export class AdminModule { }
