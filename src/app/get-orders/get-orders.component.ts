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
  constructor(private _OrderOperationsService:OrderOperationsService) 
  {

    setInterval(() => {
      console.log('test')
      _OrderOperationsService.getOrders().subscribe(
        (data)=>{
          if(data){

            this.orders=data.order;
            this.orderID=this.orders._id;
            this.orderDate=this.orders.date.substring(0,10);
            this.orderTime=this.orders.date.substring(11,19);
            this.orderByText=this.orders.orderByTexting;
            this.orderByimg=this.orders.orderByPhoto;
            console.log(this.orders);   
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
      console.log(d)
    },
      err => {
        console.log(err);
      })

  }

  ngOnInit(): void {
  }

}
