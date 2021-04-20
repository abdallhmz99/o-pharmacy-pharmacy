import { Component, OnInit } from '@angular/core';
import {OrderOperationsService} from '../services/order-operations.service';


@Component({
  selector: 'app-get-orders',
  templateUrl: './get-orders.component.html',
  styleUrls: ['./get-orders.component.scss']
})
export class GetOrdersComponent implements OnInit {
  orders:any ;
  orderDate:any;
orderByText:any;
orderTime:any;
orderID:any;
orderByimg:any;
customerData:any;
customerPhoto:any;
  constructor(private _OrderOperationsService:OrderOperationsService) 
  {

    setInterval(() => {
      _OrderOperationsService.getOrders().subscribe(
        (data)=>{
          if(data){
            console.log(data)
            if(data.message!='no orders found'){
                   this.orders=data.order;
            this.orderID=this.orders._id;
            this.orderDate=this.orders.date.substring(0,10);
            this.orderTime=this.orders.date.substring(11,19);
            this.orderByText=this.orders.orderByTexting;
            this.orderByimg=this.orders.orderByPhoto;
            this.customerData=data.customerData;
            this.customerPhoto=this.customerData.photo;
            }
            
       
          } 
         },
        (error)=>{
                 console.log(error) ;
             })
    }, 3000);
  
   
  }

  agree()
  {
    this. _OrderOperationsService.pharmacyAgree(this.orderID).subscribe(d => {
      
      console.log(d)
    },
      err => {
        console.log(err);
      })

  } 
  
  notAgree()
  {
    this. _OrderOperationsService.pharmacyNotAgree(this.orderID).subscribe(d => {
      this.orders=null;
      window.location.reload();
      console.log('canceled')
    },
      err => {
        console.log(err);
      })

  }

  ngOnInit(): void {
  }

}
