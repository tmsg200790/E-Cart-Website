//Imported Default

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



//Imported from Angular Materials
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';





//ADD MODULES HERE!!!
const MaterialModules = [
  MatChipsModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatIconModule,
  MatPaginatorModule
];

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
