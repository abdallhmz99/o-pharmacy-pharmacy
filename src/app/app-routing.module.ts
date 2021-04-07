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
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { GetOrdersComponent } from './get-orders/get-orders.component';
import { PharmacyCurrentOrdersComponent } from './pharmacy-current-orders/pharmacy-current-orders.component';
import { PharmacyOrderHistoryComponent } from './pharmacy-order-history/pharmacy-order-history.component';
import { GetOnePharmacyComponent } from './get-one-pharmacy/get-one-pharmacy.component';
import{GetOneOrderComponent}from'./get-one-order/get-one-order.component'
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:'home',component:HomeComponent},

  { path: 'signin', canActivate:[AuthLoginGuard],component: SigninComponent },
  { path: 'signup',canActivate:[AuthLoginGuard], component: SignupComponent },
  //check if logged in can't redirect to sign or signup again
  //{ path: 'signin',canActivate:[AuthLoginGuard] , component: SigninComponent },
  //{ path: 'signup', canActivate:[AuthLoginGuard],component: SignupComponent },
  { path: 'requestreset',canActivate:[AuthLoginGuard], component: RequestResetComponent },
  {path:'reportProblem',component:ReportProblemComponent},
  {path:'healthNews',canActivate:[AuthGuard,VerifyGuard],component:HealthNewsComponent},
  {path:'verifyAccount',component:VerifyEmailComponent},
  {path:'editProfile',canActivate:[AuthGuard,VerifyGuard],component:EditProfileComponent},
  {path:'getOrders',canActivate:[AuthGuard,VerifyGuard],component:GetOrdersComponent},
  {path: 'PharmacyCurrentOrders',canActivate:[AuthGuard,VerifyGuard],component:PharmacyCurrentOrdersComponent},
  {path:'pharmacyOrderHistory',canActivate:[AuthGuard,VerifyGuard],component:PharmacyOrderHistoryComponent},
  // {path:' GetOnePharmacy/:pharmacyID',component:GetOnePharmacyComponent},
  {path:'getOneOrder/:currentOrder',component:GetOneOrderComponent},
 
  //take token from ts file and send it backend
  { path: 'pharmacyForgotPassword/:token',canActivate:[AuthLoginGuard], component: ResponseResetComponent },
  { path: 'pharmacyVerifyEmail/:token',canActivate:[AuthLoginGuard], component: VerifyEmailComponent },
  // { path: 'maps', component: MapsComponent },
  // { path: 'maps',canActivate:[AuthGuard,VerifyGuard] ,component: MapsComponent },
  {path:"**",component:NotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
