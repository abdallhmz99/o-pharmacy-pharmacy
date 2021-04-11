import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { RequestResetComponent } from './request-reset/request-reset.component';
import { ResponseResetComponent } from './response-reset/response-reset.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { MapsComponent } from './maps/maps.component';
import { ReportProblemComponent } from './report-problem/report-problem.component';
import { HealthNewsComponent } from './health-news/health-news.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotVerifiedComponent } from './not-verified/not-verified.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { GetOrdersComponent } from './get-orders/get-orders.component';
import { PharmacyCurrentOrdersComponent } from './pharmacy-current-orders/pharmacy-current-orders.component';
import { PharmacyOrderHistoryComponent } from './pharmacy-order-history/pharmacy-order-history.component';
import { GetOnePharmacyComponent } from './get-one-pharmacy/get-one-pharmacy.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GetOneOrderComponent } from './get-one-order/get-one-order.component';
import { EditPrivilegeComponent } from './edit-privilege/edit-privilege.component';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    RequestResetComponent,
    ResponseResetComponent,
    VerifyEmailComponent,
    MapsComponent,
    ReportProblemComponent,
    HealthNewsComponent,
    NotFoundComponent,
    NotVerifiedComponent,
    EditProfileComponent,
    GetOrdersComponent,
    PharmacyCurrentOrdersComponent,
    PharmacyOrderHistoryComponent,
    GetOnePharmacyComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    GetOneOrderComponent,
    EditPrivilegeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
