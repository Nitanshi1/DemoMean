import { Routes } from '@angular/router';

import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    { path: 'signin', loadComponent: () => import('./components/signin/signin.component').then(m => m.SigninComponent) },
    { path: 'login', loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent) },
    { path: 'dashboard', canActivate:[authGuard], loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent) },
    // { path: '', redirectTo: '/signin', pathMatch: 'full' }
];
