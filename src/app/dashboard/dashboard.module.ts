import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpHelper } from '../_shared';

import { DashboardService } from '../_services';

import { DashboardComponent } from './';

@NgModule({
  imports: [
    CommonModule
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
