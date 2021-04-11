import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = "http://localhost:3000/";
  constructor(private _http: HttpClient) {
  }
  register(registerData: any): Observable<any> {
    return this._http.post(this.baseUrl + "pharmacySignup", registerData);
  }
  login(loginData: any): Observable<any> {
    return this._http.post(this.baseUrl + "pharmacySignin", loginData);
  }
  resetPassword(registerData: any): Observable<any> {
    return this._http.post(this.baseUrl + "forgotPasswordPharmacy", registerData);
  }
  forgotPassword(registerData: any, token: any): Observable<any> {
    return this._http.post(this.baseUrl + "pharmacyForgotPassword/" + token, registerData);
  }
  verifyEmail(token: any): Observable<any> {
    return this._http.get(this.baseUrl + "pharmacyVerifyEmail/" + token);
  }
  signinPrivilege(privilegeData:any):Observable<any>{
    return this._http.post(this.baseUrl + "pharmacyPrivilege", privilegeData);

  }

  isLoggedIn() {
    return !!localStorage.getItem('token')

  }
}
