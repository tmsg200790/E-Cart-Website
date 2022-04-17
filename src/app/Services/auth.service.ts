import { Token } from '@angular/compiler/src/ml_parser/tokens';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from "firebase/app";

import "firebase/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  currentToken: string;
 public isEnableLogout : boolean = false;

  onRegisterUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((response) => { console.log('firebase reg user :', response) })
      .catch((error) => { console.log('firebase reg error :', error) });
  }

  onLoginUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((response) => { this.getToken(); console.log('firebase login user :', response); })
      .catch((error) => { console.log('firebase login error :', error) });
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then((token: string) => { this.currentToken = token });
    return this.currentToken;
  }

  logout()
  {
    firebase.auth().signOut();
    this.currentToken=null;
    this.router.navigate(['home']);
  }

}
