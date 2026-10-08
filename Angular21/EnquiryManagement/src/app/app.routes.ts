import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { SubmitEnquiry } from './pages/submit-enquiry/submit-enquiry';
import { EnquiryList } from './pages/enquiry-list/enquiry-list';
import { Dashboard } from './pages/dashboard/dashboard';
import { Home } from './pages/home/home';
import { authGuard } from './auth-guard';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'login', component: Login },
    { path: 'submit-enquiry', component: SubmitEnquiry },
    { path: 'enquiry-list', component: EnquiryList, canActivate: [authGuard] },
    { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
    { path: 'login', component: Login }
    // { path: 'enquiry-status', component: EnquiryStatus },
    // { path: '**', redirectTo: 'home' },
];
