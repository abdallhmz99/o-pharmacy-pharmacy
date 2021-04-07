import { Component, OnInit } from '@angular/core';
import{PharmacyCurrentOrdersService} from '../services/pharmacy-current-orders.service';
@Component({
  selector: 'app-pharmacy-current-orders',
  templateUrl: './pharmacy-current-orders.component.html',
  styleUrls: ['./pharmacy-current-orders.component.scss']
})
export class PharmacyCurrentOrdersComponent implements OnInit {

  
  pharmacyCurrentOrderData: any;
  customerdata:any;

  constructor(private _PharmacyCurrentOrdersService:PharmacyCurrentOrdersService) {

_PharmacyCurrentOrdersService.pharmacyCurrentOrder().subscribe( (data)=>{
if(data.message=='success')        
{  this.pharmacyCurrentOrderData = data.pharmacyOrders[0].orderdata;
  this.customerdata=data.pharmacyOrders[0].customersData;
}
else
if(data.message=="no order founds")
{this.pharmacyCurrentOrderData = null;
  this.customerdata=null;} 

console.log(this.pharmacyCurrentOrderData);
console.log(this.customerdata);


},
err => {
  console.log(err);
} )

   }

  ngOnInit(): void {
  }

}