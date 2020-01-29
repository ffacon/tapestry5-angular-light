import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';


const appRoutes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: '',	redirectTo: 'home', pathMatch: 'full' }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
