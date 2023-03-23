import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';



export interface Element {
  position: number;
  weight: number;
  symbol: string;
}

export interface ElementTitle {
  name: string;
  position: number;
}


/**
 * @title Table with filtering
 */
@Component({
  selector: 'table-filtering-example',
  styleUrls: ['table-filtering-example.css'],
  templateUrl: 'table-filtering-example.html',
})
export class TableFilteringExample {
   displayedColumns = ['position', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

ngOnInit() {
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
 var dataa =   ELEMENT_DATA_TITLE.filter(
          element => element.position === data.position );
      return data.position.toString().toLowerCase().includes(filter) 
      || data.symbol.toLowerCase().includes(filter)
      || data.position.toString().toLowerCase() === filter
      || dataa[0].name.toString().toLowerCase().includes(filter.toLowerCase());
    };
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

}

const ELEMENT_DATA: Element[] = [
  {position: 1, weight: 1.0079, symbol: 'xx'},
  {position: 2, weight: 4.0026, symbol: 'xx'},
  {position: 3, weight: 6.941, symbol: 'xyx'},
  {position: 4, weight: 9.0122, symbol: 'xyx'},
  {position: 5, weight: 10.811, symbol: 'xyx'},
  {position: 6, weight: 12.0107, symbol: 'yy'},
  {position: 7, weight: 14.006, symbol: 'yy'},
  {position: 8, weight: 15.9994, symbol: 'yy'},
  {position: 9, weight: 18.9984, symbol: 'yy'}
];

const ELEMENT_DATA_TITLE: ElementTitle[] = [
  {position: 1, name: 'Hydrogen'},
  {position: 2, name: 'Helium'},
  {position: 3, name: 'Lithium'},
  {position: 4, name: 'Beryllium'},
  {position: 5, name: 'Boron'},
  {position: 6, name: 'Carbon'},
  {position: 7, name: 'Nitrogen'},
  {position: 8, name: 'Oxygen'},
  {position: 9, name: 'Fluorine'}
];


import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'FilterData'
})
export class OrdinalPipe implements PipeTransform {

  transform(value: number): string {
    var data =   ELEMENT_DATA_TITLE.filter(
          element => element.position === value );
          return  data[0].name; 
  }
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */