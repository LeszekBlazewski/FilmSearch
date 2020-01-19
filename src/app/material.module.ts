import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

const materialDependencties = [
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [materialDependencties]
})
export class MaterialModule { }
