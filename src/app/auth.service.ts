import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) {
    
   }
   register(registerData:any):Observable<any>
   {
    return this._http.post("http://localhost:3000/pharmacySignup",registerData);
   }
   login(loginData: any):Observable<any>
   {
    return this._http.post("http://localhost:3000/pharmacySignin",loginData);
   }
   resetPassword(registerData:any):Observable<any>
   {
    return this._http.post("http://localhost:3000/forgotPasswordPharmacy",registerData);
   }
   forgotPassword(registerData:any,token:any):Observable<any>
   {
    return this._http.post("http://localhost:3000/pharmacyForgotPassword/"+token,registerData);
   }
}
