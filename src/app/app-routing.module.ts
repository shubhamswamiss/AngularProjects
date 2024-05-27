import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Routing/about-us/about-us.component';
import { ContactComponent } from './Routing/contact/contact.component';
import { HomeComponent } from './Routing/home/home.component';
import { UserComponent } from './Routing/user/user.component';
import { PageNotFoundComponent } from './PageNotFound/page-not-found/page-not-found.component';
import { AboutCompanyComponent } from './ChildRouting/about-company/about-company.component';
import { AboutMeComponent } from './ChildRouting/about-me/about-me.component';
import { LoginComponent } from './users/login/login.component';
import { SignUpComponent } from './users/sign-up/sign-up.component';

const routes: Routes = [
  { path : '', component : HomeComponent },

  { path : 'about', component : AboutUsComponent,
    children:[
      { path:'company' , component:AboutCompanyComponent },
      { path:'me' , component:AboutMeComponent }
    ]
  },

  { path : 'contact', component: ContactComponent },
  { path : 'user/:id', component : UserComponent },
  { path:'login' , component : LoginComponent },
  { path:'signup' , component : SignUpComponent },

  {
    path:'admin' , loadChildren:()=>import('./admin/admin.module')
    .then(mod=>mod.AdminModule)
  },

  {
    path:'lazy' , loadChildren:()=>import('./lazy-loading/lazy-loading.module')
    .then(mod=>mod.LazyLoadingModule)
  }
 // { path : '**', component : PageNotFoundComponent },

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
