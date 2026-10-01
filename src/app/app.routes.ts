import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { EmployeeDetails } from './employee-details/employee-details';
import { Cart } from './cart/cart';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
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
        path: 'cart',
        component: Cart
    },
    {
        path: 'employees/:id',
        component: EmployeeDetails
    }
];
