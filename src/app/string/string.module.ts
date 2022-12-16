import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StringComponent } from './string.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [StringComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ]

})
export class StringModule { }
