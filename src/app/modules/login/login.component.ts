import { Component, OnInit } from '@angular/core';
import { UserCredentials } from '../../models/user-credentials';
import { LoginService } from '../../services/login.service';

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

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  validateCredentials() : void {
    this.loginService.validateUserCredentials(this.userCredentials);
    console.log(this.userCredentials);
  }
}
