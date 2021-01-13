import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { RequestResetComponent } from './request-reset/request-reset.component';
import {SigninComponent} from './signin/signin.component'
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  //   {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
    {path:'requestreset',component:RequestResetComponent},



];

// const routes: Routes = [
//   {path:'',redirectTo:'home',pathMatch:'full'},
//   {path:'login',component:LoginComponent},
//   {path:'signup',component:SignupComponent},
//   {path:'toprated',component:TopratedComponent,canActivate:[AuthGuardService]},
//   {path:'home',component:HomeComponent,canActivate:[AuthGuardService]},
//   {path:'movie',component:MoviesComponent,canActivate:[AuthGuardService]},
//   {path:'tv',component:TvComponent,canActivate:[AuthGuardService]},
//   {path:'popular',component:PopularComponent,canActivate:[AuthGuardService]},
//   {path:'upcoming',component:UpcomingComponent,canActivate:[AuthGuardService]},
//   {path:'voteaverage',component:VoteaverageComponent,canActivate:[AuthGuardService]},
//   {path:'votenew',component:VotenewComponent,canActivate:[AuthGuardService]},
//   {path:'person',component:PersonComponent,canActivate:[AuthGuardService]},
 
//   {path:'series',component:SeriesComponent,canActivate:[AuthGuardService]}

// ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
