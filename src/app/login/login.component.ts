import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../_services';

import { Login } from '../_models';

@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;
  private msgError: string;

  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) {}

  ngOnInit() {
        this.createForm();
  }

  private createForm() {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    this.loginForm = this.fb.group({
      user: ['',  Validators.compose([ Validators.required, Validators.pattern(emailRegex) ]) ],
      password: ['', Validators.required ]
    });
  }

  login(model: any, isValid: boolean) {
    this.loginService.login(model.user, model.password)
      .subscribe(
        login => this.processLogin(login),
        error => this.msgError = error.error.message
      );
    this.router.navigate(['/dashboard']);
  }

  processLogin(login: Login) {
    localStorage['access_token'] = login.token;
    this.router.navigate(['/dashboard']);
  }

}
