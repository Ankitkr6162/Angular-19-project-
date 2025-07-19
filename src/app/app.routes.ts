import { Routes } from '@angular/router';
import { AboutComponent } from './Routing/about/about.component';
import { ContactComponent } from './Routing/contact/contact.component';
import { LoginComponent } from './Routing/login/login.component';
import { HomeComponent } from './Routing/home/home.component';
import { PageNotFoundComponent } from './Routing/page-not-found/page-not-found.component';
import { ProfilePageComponent } from './Routing/profile-page/profile-page.component';
import { UsersComponent } from './Dynamic Routing/users/users.component';

export const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent },
    { path: 'profile', component: ProfilePageComponent },
    {path:'user/:id/:name',component:UsersComponent},
    { path: '**', component: PageNotFoundComponent },
];
