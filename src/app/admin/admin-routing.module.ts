import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ListComponent} from './list/list.component';

const routes: Routes = [
  //  { path:'admin',children:[
  //   { path :'list' , component:ListComponent},
  //   { path:'login' ,component:AdminLoginComponent }
  //  ]
  // }

  { path :'list' , component:ListComponent},
  { path:'login' ,component:AdminLoginComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
