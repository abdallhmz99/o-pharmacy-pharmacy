import { Component, OnInit } from '@angular/core';
import { PharmacyOrderHistoryService } from '../services/pharmacy-order-history.service';
import{ActivatedRoute}from '@angular/router';
import { PharmacyCurrentOrdersService } from '../services/pharmacy-current-orders.service';
@Component({
  selector: 'app-get-one-pharmacy',
  templateUrl: './get-one-pharmacy.component.html',
  styleUrls: ['./get-one-pharmacy.component.scss']
})
export class GetOnePharmacyComponent implements OnInit {
  onePharmacyData:any;
  orderId:any;
  constructor(_ActivatedRoute:ActivatedRoute,_pharmacyOrderHistoryService:PharmacyOrderHistoryService ) { 
    this.orderId =  _ActivatedRoute.snapshot.paramMap.get('pharmacyID')

    _pharmacyOrderHistoryService.onePharmacy(this.orderId).subscribe(

      (data)=>{
        
        this.onePharmacyData=data;    
},
(error)=>{
        console.log(error) ;
    })}
    


ngOnInit(): void {
}

}
