import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { SharedModule, HttpHelper, EventBrokerHelper } from '../_shared';

import { LoginService } from '../_services';

import { LoginComponent } from './';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    HttpHelper,
    EventBrokerHelper,
    LoginService
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class LoginModule { }
