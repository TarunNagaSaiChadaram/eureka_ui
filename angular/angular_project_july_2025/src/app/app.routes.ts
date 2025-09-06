import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Aboutus } from './components/aboutus/aboutus';
import { Careers } from './components/careers/careers';
import { Contactus } from './components/contactus/contactus';
import { Notfound } from './components/notfound/notfound';
import { Products } from './components/products/products';
import { Users } from './components/users/users';
import { Usersdetails } from './components/usersdetails/usersdetails';
import { Productdetails } from './components/productdetails/productdetails';

export const routes: Routes = [
    {path:'home',component:Home},
    {path:'aboutus',component:Aboutus},
    {path:'careers',component:Careers},
    {path:'contactus',component:Contactus},
    {path:'products',component:Products},
    {path:'productdetails',component:Productdetails},
    {path:'users',component:Users},
    {path:'usersdetails/:id',component:Usersdetails},
    {path:'contactus',component:Contactus},
    {path:'',component:Home},
    {path:'**',component:Notfound},
];