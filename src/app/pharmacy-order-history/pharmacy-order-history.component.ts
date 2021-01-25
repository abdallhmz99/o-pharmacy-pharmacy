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
      
      this.allOrdersData=data;    
},
(error)=>{
      console.log(error) ;
  })}
  


ngOnInit(): void {
}

}
