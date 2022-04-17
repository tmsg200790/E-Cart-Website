import { Component, OnInit } from '@angular/core';
import firebase from "firebase/app";
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'httpAuth';

  

  constructor( public _auth:AuthService ){}

  ngOnInit() {

    const firebaseConfig = {
      apiKey : 'AIzaSyApf4MWqnTWygKo55Sn-_vVsB1F6QisSTo'
    };
   
    firebase.initializeApp(firebaseConfig);

  }

  isAuthenticated()
  {
    return this._auth.currentToken == null? false:true;
  }

  onLogout()
  {
    this._auth.isEnableLogout = true;
 
  this._auth.logout();
  }

}
