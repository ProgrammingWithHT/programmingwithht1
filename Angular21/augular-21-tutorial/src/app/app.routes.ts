import { Routes } from '@angular/router';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';
import { Profile } from './profile/profile';
import { User } from './user/user';
import { Admin } from './admin/admin';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'about',
        component: About
    },
    {
        path: 'contact',
        component: Contact
    },
    {
        path: 'profile',
        component: Profile,
        data: {name: 'HamzaT'}
    },
    {
        path: 'user/:id/:name',
        component: User,
    },
    {
        path: 'admin', 
        loadComponent:()=>import('./admin/admin').then((c)=>c.Admin)
    },
    // always set ** route in end of routing otherwise it always display not found page if set at first position
    {
        path: '**',
        component: PageNotFound
    }
];
