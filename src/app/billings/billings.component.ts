import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooktransferService } from '../Services/booktransfer.service';
import { DatatransferService } from '../Services/datatransfer.service';
import {DataSource} from '@angular/cdk/table';

@Component({
  selector: 'app-billings',
  templateUrl: './billings.component.html',
  styleUrls: ['./billings.component.css']
})
export class BillingsComponent implements OnInit {
 
 
 

  constructor(public _dataTransfer:DatatransferService, private router:Router,
    public _booktransfer: BooktransferService ) { }

  ngOnInit(): void {
  }

  onRemoveItem(product)
  {
    this._dataTransfer.onRemoveItemFinal(product);
  }

  public proceedToBillings() {
    console.log('Bill Details : ',this._dataTransfer.cart);
    this.router.navigate(['billings']);
    this._booktransfer.onSendBill( this._dataTransfer.cart );
    this._dataTransfer.billData();
  }

  public showAllBill()
  {
   this._dataTransfer.showAllBillEnable=true;
   this._dataTransfer.billEntire();
    
  }
  
  // onSendBook() {
  //   this.bookSubPost = this._booktransfer.onSendBookVia(this.books)
  //      .subscribe(
  //        subs => { console.log('Books Sent:', subs) },
  //        error => { console.log('Arrived Error:', error) },
  //        () => { console.log('Completed') }
  //      );
  //  }
 
  //  onGetBook() {
  //    this.bookSubGet = this._booktransfer.onSendBookVia(this.books)
  //    .subscribe( 
  //      (subs) => { console.log('Books Received :', subs) },
  //    (error) => { console.log('Arrived Error:', error) },
  //    () => { console.log('Completed') }
  //  );
  //  }


}
