import 'hammerjs';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatToolbarModule } from '@angular/material';

import { SharedModule, DashboardModule, LoginModule } from './';

import { AppComponent } from './app.component';
import { AppGuard } from './app.guard';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatToolbarModule,
    SharedModule,
    DashboardModule,
    LoginModule,
    AppRoutingModule
  ],
  providers: [
    AppGuard
  ],
  bootstrap: [
    AppComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
