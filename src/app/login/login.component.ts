import { Component, OnInit } from '@angular/core';
import { UserCredentials } from '../user-credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userCredentials : UserCredentials = {
    username: "",
    password: ""
  }

  constructor() { }

  ngOnInit() {
  }

  validateCredentials() : void {
    // this.loginService.validateLoginCredentials(this.loginCredentials);
    console.log(this.userCredentials);
  }
}
