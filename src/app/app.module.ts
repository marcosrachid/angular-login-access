import 'hammerjs';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatToolbarModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import {
  SharedModule,
  DashboardModule,
  LoginModule,
  RegisterUserModule,
  AppGuard,
  HttpHelper,
  EventBrokerHelper,
  EmptyResponseInterceptor,
  TokenInterceptor
} from './';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient]
        }
    }),
    SharedModule,
    DashboardModule,
    LoginModule,
    RegisterUserModule,
    AppRoutingModule
  ],
  providers: [
    AppGuard,
    EventBrokerHelper,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: EmptyResponseInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    HttpHelper
  ],
  bootstrap: [
    AppComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
