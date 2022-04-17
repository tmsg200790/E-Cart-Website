import { Component, OnInit } from '@angular/core';
import { DatatransferService } from '../Services/datatransfer.service';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {

  constructor( public _dataTransfer :DatatransferService )  { }

  ngOnInit(): void {
  }

  onAddCart(product)
  {
    this._dataTransfer.onAddCartFinal(product);
  }
  
}
