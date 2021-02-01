import { Component, OnInit } from '@angular/core';
import {OrderOperationsService} from '../services/order-operations.service';


@Component({
  selector: 'app-get-orders',
  templateUrl: './get-orders.component.html',
  styleUrls: ['./get-orders.component.scss']
})
export class GetOrdersComponent implements OnInit {
  orders:any ;

  constructor(private _OrderOperationsService:OrderOperationsService) 
  {

    setInterval(() => {
      console.log('test')
      _OrderOperationsService.getOrders().subscribe(
        (data)=>{
                 this.orders=data.order;
                 console.log(this.orders);    
         },
        (error)=>{
                 console.log(error) ;
             })
    }, 3000);
  
   
  }

  agree(order_id:any)
  {
    this. _OrderOperationsService.pharmacyAgree(order_id).subscribe(d => {
      console.log(d)
    },
      err => {
        console.log(err);
      })

  } 
  
  notAgree(order_id:any)
  {
    this. _OrderOperationsService.pharmacyNotAgree(order_id).subscribe(d => {
      console.log(d)
    },
      err => {
        console.log(err);
      })

  }

  ngOnInit(): void {
  }

}
