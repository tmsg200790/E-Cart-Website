import { Component, OnInit } from '@angular/core';
import { DatatransferService } from '../Services/datatransfer.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {

  constructor(public _dataTransfer:DatatransferService) { }

  ngOnInit(): void {
  }

  onAddCart(product)
  {
    this._dataTransfer.onAddCartFinal(product);
  }

}
