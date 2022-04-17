import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { DatatransferService } from './datatransfer.service';



@Injectable({
  providedIn: 'root'
})
export class BooktransferService {

  constructor(private _httpClient:HttpClient , private _auth:AuthService,private _dataTransfer : DatatransferService) { }

  onSendBookVia(books: any[])
  {
    const tk = this._auth.getToken();
    return this._httpClient.post("https://httpclient-9e084-default-rtdb.firebaseio.com/bookFormData.json?auth=" + tk, books);
  }

  onGetBookVia()
  {
    const tk = this._auth.getToken();
   return this._httpClient.get("https://httpclient-9e084-default-rtdb.firebaseio.com/bookFormData.json?auth=" + tk);
  }


  onSendBill(cart:any[])
  {
    const tk = this._auth.getToken();
     this._httpClient.post("https://httpclient-9e084-default-rtdb.firebaseio.com/cart.json?auth=" + tk ,cart);
  }

  // onGetBill()
  // {
  //   const tk = this._auth.getToken();
  //  return this._httpClient.get("https://httpclient-9e084-default-rtdb.firebaseio.com/cart.json?auth=" + tk);
  // }

}
