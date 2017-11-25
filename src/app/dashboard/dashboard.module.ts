import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { SharedModule, HttpHelper } from '../_shared';

import { DashboardService } from '../_services';

import { DashboardComponent } from './';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    DashboardComponent
  ],
  providers: [
    HttpHelper,
    DashboardService
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class DashboardModule { }
