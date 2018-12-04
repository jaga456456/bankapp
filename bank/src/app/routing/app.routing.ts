import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { HomeComponent } from '../components/home/home.component';
import { ProductsComponent } from '../components/products/products.component';
import { ServicesComponent } from '../components/services/services.component';
import { NewsComponent } from '../components/news/news.component';
import { ContactsComponent } from '../components/contacts/contacts.component';

const appRoutes : Routes = [
    {
        path: 'login',
        loadChildren: 'app/modules/login/login.module#LoginModule'
    },
    {
        path: 'register',
        loadChildren: 'app/modules/register/register.module#RegisterModule'
    },
    {
        path: 'dashboard',
        loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule'
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);

const loginRoutes : Routes = [
    {
        path: '',
        component: LoginComponent
    }
];

export const LoginRoutingModule: ModuleWithProviders = RouterModule.forChild(loginRoutes);
 
const registerRoutes : Routes =[
{
    path: '',
    component: RegisterComponent
}
];

export const RegisterRoutingModule: ModuleWithProviders = RouterModule.forChild(registerRoutes);

const dashboardRoutes : Routes =[
    {
        path: '',
        component: DashboardComponent
    //     children: [
    //     {
    //         path: '',
    //         redirectTo: 'home'
    //     },  {
    //         path: 'home',
    //         component: HomeComponent
    //     },  {
    //         path:'products',
    //         component: ProductsComponent
    //     },  {
    //         path:'services',
    //         component: ServicesComponent
    //     },  {
    //         path:'news',
    //         component: NewsComponent
    //     },  {
    //         path:'contacts',
    //         component: ContactsComponent
    //     }
    // ]
    }
];

export const DashboardRoutingModule: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);