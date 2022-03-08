import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaskPipe } from './pipes/mask.pipe';

@NgModule({
  declarations: [MaskPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ReactiveFormsModule,
    MaskPipe
  ]
})
export class SharedModule { }
