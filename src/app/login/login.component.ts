import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../_services';

import { Login } from '../_models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private user: string;
  private password: string;
  private msgError: string;

  constructor(private router: Router, private loginService: LoginService) {}

  login() {
    this.loginService.login(this.user, this.password)
      .subscribe(
        login => this.processLogin(login),
        error => this.msgError = error
      );
    this.router.navigate(['/']);
  }

  processLogin(login: Login) {
    localStorage['access_token'] = login.access_token;
    this.router.navigate(['/']);
  }

}
