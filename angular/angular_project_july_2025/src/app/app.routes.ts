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
import { Permanentjobs } from './components/permanentjobs/permanentjobs';
import { Contractjobs } from './components/contractjobs/contractjobs';
import { Uploadvideo } from './components/uploadvideo/uploadvideo';
import { trainerGuard } from './guards/trainer-guard';
import { canExitGuard } from './guards/can-exit-guard';

export const routes: Routes = [
    {path:'home',component:Home},
    {path:'aboutus',component:Aboutus},
    {path:'careers',component:Careers,
     children:[
        {path:'',component:Permanentjobs},
        {path:'permanentjobs',component:Permanentjobs},
        {path:'contractjobs',component:Contractjobs}
     ]
    },
    {path:'contactus',component:Contactus
        ,canDeactivate:[canExitGuard]},
    {path:'products',component:Products},
    {path:'productdetails',component:Productdetails},
    {path:'users',component:Users},
    {path:'usersdetails/:id',component:Usersdetails},
    {path:'contactus',component:Contactus},
    {path:'uploadvideo',component:Uploadvideo
        ,canActivate:[trainerGuard]},
    {path:'',component:Home},
    {path:'**',component:Notfound},
];