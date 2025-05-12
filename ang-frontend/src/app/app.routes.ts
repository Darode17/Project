import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LookingForBloodComponent } from './pages/looking-for-blood/looking-for-blood.component';
import { DonateBloodComponent } from './pages/donate-blood/donate-blood.component';
import { BankLoginComponent } from './pages/bank-login/bank-login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'looking-for-blood', component: LookingForBloodComponent },
    { path: 'donate-blood', component: DonateBloodComponent },
    { path: 'bank-login', component: BankLoginComponent },
    { path: 'dashboard', component: DashboardComponent },
];
