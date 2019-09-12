import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent,
  },
  {
    path:"Login",
    component:LoginComponent,
  },
  {
    path:"SignUp",
    component:SignupComponent
  },
  {
    path:"user",
    loadChildren: './modules/navigation/navigation.module#NavigationModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
