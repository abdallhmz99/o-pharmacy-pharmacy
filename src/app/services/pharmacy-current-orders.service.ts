import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PharmacyCurrentOrdersService {

  constructor(public _HttpClient:HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({
   'token':'Bearer' + localStorage.getItem('token')
    }) 
        
    }

  baseUrl = "http://localhost:3000/";


  pharmacyCurrentOrder():Observable<any>
  {
    return this._HttpClient.get(this.baseUrl+"pharmacyCurrentOrders",this.httpOptions)
}

doneOrder(orderId:any):Observable<any>
{
  return this._HttpClient.post(this.baseUrl+"doneorder",{orderId},this.httpOptions)
}

cancelOrder(orderId:any):Observable<any>
{
  return this._HttpClient.post(this.baseUrl+"cancel",{orderId},this.httpOptions)
}

  }
