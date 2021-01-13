import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { RequestResetComponent } from './request-reset/request-reset.component';
import { ResponseResetComponent } from './response-reset/response-reset.component';
import {SigninComponent} from './signin/signin.component'
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
    {path:'requestreset',component:RequestResetComponent},
    {path:'pharmacyForgotPassword/:token',component:ResponseResetComponent}



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
