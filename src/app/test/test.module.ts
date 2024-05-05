import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HiComponent } from './hi/hi.component';



@NgModule({
  declarations: [
    HiComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HiComponent
  ]
})
export class TestModule { }
