import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { EventBrokerHelper } from '../_shared';

import { LoginService } from '../_services';

import { Login } from '../_models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;
  private msgError: string;

  constructor(private fb: FormBuilder, private router: Router,
    private translate: TranslateService, private loginService: LoginService,
    private eventBroker: EventBrokerHelper) {}

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.loginForm = this.fb.group({
      user: ['',  Validators.compose([ Validators.required, Validators.email ]) ],
      password: ['', Validators.compose([ Validators.required, Validators.minLength(6) ]) ]
    });
  }

  login(model: any, isValid: boolean) {
    if (isValid) {
      this.loginService.login(model.user, model.password)
        .subscribe(
          login => this.processLogin(login),
          error => this.msgError = `Err: ${error.message}`
        );
    } else {
      this.translate.getTranslation(localStorage['language'])
        .subscribe(
          res => this.msgError = res.login.alert.invalid,
          error => console.log(error)
        );
    }
  }

  processLogin(login: Login) {
    localStorage['access_token'] = login.token;
    this.eventBroker.emit<string>('token', login.token);
    this.router.navigate(['/dashboard']);
  }

  register() {
    this.router.navigate(['/sign-up']);
  }

}
