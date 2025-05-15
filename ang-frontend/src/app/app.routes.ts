import { Routes } from '@angular/router';


import { DonorSignupComponent } from './donor-signup/donor-signup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', component: HomeComponent },
    { path: 'Login', component: DonorSignupComponent },
    { path: 'Contactus', component: ContactusComponent },
];
