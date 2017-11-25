import { Routes } from '@angular/router';

import { DashboardComponent } from './';

import { AppGuard } from '../';

export const DashboardRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [ AppGuard ] }
];
