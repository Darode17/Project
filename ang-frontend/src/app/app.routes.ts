import { Routes } from '@angular/router';


import { DonorSignupComponent } from './donor-signup/donor-signup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { DonarLoginComponent } from './donar-login/donar-login.component';
import { ReceiverLoginComponent } from './receiver-login/receiver-login.component';
import { ReceiverSignupComponent } from './receiver-signup/reciver-signup.component';
import { LoginComponent } from './login/login.component';
import { PulsePointDetailsComponent } from './pulse-point-details/pulse-point-details.component';

export const routes: Routes = [
    // { path: '', redirectTo: 'Home', pathMatch: 'full' },
    // { path: 'Home', component: HomeComponent },
    // { path: 'Login', component: DonorSignupComponent },
    // { path: 'Contactus', component: ContactusComponent },
    { path: 'login', component: LoginComponent },
    { path: 'receiver-login', component: ReceiverLoginComponent },
    { path: 'donor-login', component: DonarLoginComponent },
    { path: 'donor-login', component: DonarLoginComponent },
    { path: 'donor-signup', component: DonorSignupComponent },
    { path: 'pulse-point-details', component: PulsePointDetailsComponent },
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', component: HomeComponent },
    { path: 'receiver-login', component: ReceiverLoginComponent },
    { path: 'receiver-signup', component: ReceiverSignupComponent },
];
