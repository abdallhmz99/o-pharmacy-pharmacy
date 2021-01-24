import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders}from'@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderOperationsService {

  constructor(public _HttpClient:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
   'token':'Bearer' + localStorage.getItem('token')
    }) 
        
    }
  
    baseUrl = "http://localhost:3000/";

       

    getOrders():Observable<any>
    {
      return this._HttpClient.get(this.baseUrl + "getOrders",this.httpOptions)
    }

    pharmacyAgree(order_id:any):Observable<any>
    {
      return this._HttpClient.post(this.baseUrl + "pharmacyAgree",{order_id},this.httpOptions);
    }

    pharmacyNotAgree(order_id:any):Observable<any>
    {
      return this._HttpClient.post(this.baseUrl + "pharmacyNotAgree",{order_id},this.httpOptions);
    }

    doneOrder(order_id:any):Observable<any>
    {
      return this._HttpClient.post(this.baseUrl + "doneorder",{order_id},this.httpOptions);
    }



}
