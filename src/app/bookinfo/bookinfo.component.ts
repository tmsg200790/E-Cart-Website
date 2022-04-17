import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { BooktransferService } from '../Services/booktransfer.service';


@Component({
  selector: 'app-bookinfo',
  templateUrl: './bookinfo.component.html',
  styleUrls: ['./bookinfo.component.css']
})
export class BookinfoComponent implements OnInit {


  bookSubPost :Subscription;
  bookSubGet :Subscription;


  constructor(private _booktransfer: BooktransferService) { }

  bookForm: FormGroup;
  books: { bookname : string , bookid : number , bookauthor : string }[] = [];

  ngOnInit() {
    this.bookForm = new FormGroup({
      'bookData': new FormGroup({
        'bookname': new FormControl('Book Name', [Validators.required]),
        'bookid': new FormControl( 23032201, [Validators.required]),
        'bookauthor': new FormControl('Book Author', [Validators.required])
      }),
    });
  }

  onSubmit() {
    console.log(this.bookForm);
  }

  onAddBook() {

    const bookname = this.bookForm.get('bookData.bookname').value;
    const bookid = this.bookForm.get('bookData.bookid').value;
    const bookauthor = this.bookForm.get('bookData.bookauthor').value;

    this.books.push({
      bookname: bookname,
      bookid: bookid,
      bookauthor: bookauthor
    });
  }

  setDefaultValue() {
    this.bookForm = new FormGroup({
      'bookData': new FormGroup({
        'bookname': new FormControl('Book Name', [Validators.required]),
        'bookid': new FormControl('23032201', [Validators.required, Validators.email]),
        'bookauthor': new FormControl('Book Author', [Validators.required])
      }),
    });
  }

  onSendBook() {
   this.bookSubPost = this._booktransfer.onSendBookVia(this.books)
      .subscribe(
        subs => { console.log('Books Sent:', subs) },
        error => { console.log('Arrived Error:', error) },
        () => { console.log('Completed') }
      );
  }

  onGetBook() {
    this.bookSubGet = this._booktransfer.onSendBookVia(this.books)
    .subscribe( 
      (subs) => { console.log('Books Received :', subs) },
    (error) => { console.log('Arrived Error:', error) },
    () => { console.log('Completed') }
  );
  }


  onReset() {
    this.bookForm.reset();
  }


}
