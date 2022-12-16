import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StringComponent } from './string.component';



@NgModule({
  declarations: [StringComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]

})
export class StringModule { }
