import 'hammerjs';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatToolbarModule, MatFormFieldModule, MatSelectModule } from '@angular/material';

import { SharedModule, DashboardModule, LoginModule, LoginService, EventBrokerHelper } from './';

import { AppComponent } from './app.component';
import { AppGuard } from './app.guard';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    SharedModule,
    DashboardModule,
    LoginModule,
    AppRoutingModule
  ],
  providers: [
    AppGuard,
    LoginService,
    EventBrokerHelper
  ],
  bootstrap: [
    AppComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
