import { Component, OnInit } from '@angular/core';
import { PharmacyOrderHistoryService } from '../services/pharmacy-order-history.service';

@Component({
  selector: 'app-pharmacy-order-history',
  templateUrl: './pharmacy-order-history.component.html',
  styleUrls: ['./pharmacy-order-history.component.scss']
})
export class PharmacyOrderHistoryComponent implements OnInit {

  allOrdersData:any

constructor(_PharmacyOrderHistoryService:PharmacyOrderHistoryService) { 

  _PharmacyOrderHistoryService.allOrders().subscribe(
    (data)=>{
      console.log('tests')
      if (data.message=='success') {
        this.allOrdersData=data.pharmacyOrders;
      }
      else if (data.message="You Didn't Receive Order Yet") {
        this.allOrdersData=null;   
        console.log(this.allOrdersData);
      }
        
},
(error)=>{
      console.log(error) ;
  })}
  


ngOnInit(): void {
}

}
