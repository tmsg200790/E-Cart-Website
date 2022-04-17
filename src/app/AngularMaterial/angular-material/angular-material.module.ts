import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



const MaterialModules = [];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MaterialModules
  ],
  exports: [
    ...MaterialModules
  ]
})
export class AngularMaterialModule { }
