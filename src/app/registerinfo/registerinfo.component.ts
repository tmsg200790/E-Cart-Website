import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-registerinfo',
  templateUrl: './registerinfo.component.html',
  styleUrls: ['./registerinfo.component.css']
})
export class RegisterinfoComponent implements OnInit {

  regForm: FormGroup;



  constructor(private _auth: AuthService) { }


  ngOnInit() {
    this.regForm = new FormGroup({
      'regData': new FormGroup({
        'regmail': new FormControl('useradmin@mail.com', [Validators.required]),
        'regpassword': new FormControl('useradmin1234', [Validators.required])
      }),
    });
  }

  onRegister() {
    const email = this.regForm.get('regData.regmail').value;
    const password = this.regForm.get('regData.regpassword').value;

    this._auth.onRegisterUser(email, password);
  }

}
