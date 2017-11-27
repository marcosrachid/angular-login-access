import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  LoginRoutes,
  DashboardRoutes,
  RegisterUserRoutes
} from './';

import { AppComponent } from './app.component';

export const routes: Routes = [
  ...LoginRoutes,
  ...RegisterUserRoutes,
  ...DashboardRoutes,
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
