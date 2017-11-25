import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpHelper } from '../_shared';

import { LoginService } from '../_services';

import { LoginComponent } from './';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    HttpHelper,
    LoginService
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class LoginModule { }
