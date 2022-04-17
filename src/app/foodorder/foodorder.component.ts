import { Component, OnInit } from '@angular/core';

// Imported From Angular Materials
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-foodorder',
  templateUrl: './foodorder.component.html',
  styleUrls: ['./foodorder.component.css']
})


export class FoodorderComponent implements OnInit {


  ngOnInit(): void {
  }

 
    separatorKeysCodes: number[] = [ENTER, COMMA];
    fruitCtrl = new FormControl();
    filteredFruits: Observable<string[]>;
    fruits: string[] = ['Dosa'];
    allFruits: string[] = ['Idly', 'Chappathi', 'Parotta', 'Pongal', 'Poori'];
  
    @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  
    constructor() {
      this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
        startWith(null),
        map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allFruits.slice())),
      );
    }
  
    add(event: MatChipInputEvent): void {
      const value = (event.value || '').trim();
  
      // Add our fruit
      if (value) {
        this.fruits.push(value);
      }
  
      // Clear the input value
      event.chipInput!.clear();
  
      this.fruitCtrl.setValue(null);
    }
  
    remove(fruit: string): void {
      const index = this.fruits.indexOf(fruit);
  
      if (index >= 0) {
        this.fruits.splice(index, 1);
      }
    }
  
    selected(event: MatAutocompleteSelectedEvent): void {
      this.fruits.push(event.option.viewValue);
      this.fruitInput.nativeElement.value = '';
      this.fruitCtrl.setValue(null);
    }
  
    private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();
  
      return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
    }

    availableColors: ChipColor[] = [
      {name: 'none', color: undefined},
      {name: 'Primary', color: 'primary'},
      {name: 'Accent', color: 'accent'},
      {name: 'Warn', color: 'warn'},
    ];
   
  }

  
  
  
  export interface ChipColor {
    name: string;
    color: ThemePalette;
  }



