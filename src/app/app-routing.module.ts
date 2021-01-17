import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { RequestResetComponent } from './request-reset/request-reset.component';
import { ResponseResetComponent } from './response-reset/response-reset.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { MapsComponent } from './maps/maps.component'
import { AuthGuard } from './Guards/auth.guard';
import { AuthLoginGuard } from './Guards/auth-login.guard';
import { ReportProblemComponent } from './report-problem/report-problem.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HealthNewsComponent } from './health-news/health-news.component';
import {VerifyGuard} from './Guards/verify.guard';
const routes: Routes = [
  {path:"",redirectTo:"signin",pathMatch:"full"},
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  //check if logged in can't redirect to sign or signup again
  //{ path: 'signin',canActivate:[AuthLoginGuard] , component: SigninComponent },
  //{ path: 'signup', canActivate:[AuthLoginGuard],component: SignupComponent },
  { path: 'requestreset', component: RequestResetComponent },
  {path:'reportProblem',component:ReportProblemComponent},
  //{path:'healthNews',component:HealthNewsComponent},
  {path:'healthNews',canActivate:[AuthGuard,VerifyGuard],component:HealthNewsComponent},

  //take token from ts file and send it backend
  { path: 'pharmacyForgotPassword/:token', component: ResponseResetComponent },
  { path: 'pharmacyVerifyEmail/:token', component: VerifyEmailComponent },
  { path: 'maps', component: MapsComponent },
  // { path: 'maps',canActivate:[AuthGuard,VerifyGuard] ,component: MapsComponent },
  {path:"**",component:NotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
