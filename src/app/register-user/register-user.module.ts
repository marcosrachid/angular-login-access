import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { SharedModule, TermsComponent } from '../_shared';

import { RegisterUserService } from '../_services';

import { RegisterUserComponent } from './';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    RegisterUserComponent,
    TermsComponent
  ],
  entryComponents: [
    TermsComponent
  ],
  providers: [
    RegisterUserService
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class RegisterUserModule { }
