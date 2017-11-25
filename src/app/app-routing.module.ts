import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginRoutes } from './login';
import { DashboardRoutes } from './dashboard';

import { AppComponent } from './';

export const routes: Routes = [
  ...LoginRoutes,
  ...DashboardRoutes,
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
