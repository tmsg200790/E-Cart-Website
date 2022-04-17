import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-logininfo',
  templateUrl: './logininfo.component.html',
  styleUrls: ['./logininfo.component.css']
})
export class LogininfoComponent implements OnInit {

  loginForm : FormGroup;

  constructor(public _auth:AuthService,private router:Router, private activeRoute:ActivatedRoute) {}
  ngOnInit() {
    this.loginForm = new FormGroup({
      'loginData': new FormGroup({
        'loginmail': new FormControl('useradmin@mail.com', [Validators.required]),
        'loginpassword': new FormControl('useradmin1234', [Validators.required])
      }),
    });
  }

  onLogin()
  {
    const email = this.loginForm.get('loginData.loginmail').value;
    const password = this.loginForm.get('loginData.loginpassword').value;
  
    this._auth.onLoginUser(email,password);

    this.router.navigate(['/men'],{ relativeTo : this.activeRoute});
    
  }

  onLogout()
  {
    
  this._auth.logout();
  }

}
