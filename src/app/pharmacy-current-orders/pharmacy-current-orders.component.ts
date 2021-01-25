import { Component, OnInit } from '@angular/core';
import{PharmacyCurrentOrdersService} from '../services/pharmacy-current-orders.service';
@Component({
  selector: 'app-pharmacy-current-orders',
  templateUrl: './pharmacy-current-orders.component.html',
  styleUrls: ['./pharmacy-current-orders.component.scss']
})
export class PharmacyCurrentOrdersComponent implements OnInit {

  
  pharmacyCurrentOrderData: any;

  constructor(private _PharmacyCurrentOrdersService:PharmacyCurrentOrdersService) {

_PharmacyCurrentOrdersService.pharmacyCurrentOrder().subscribe( (data)=>{
        
  this.pharmacyCurrentOrderData = data; 


},
err => {
  console.log(err);
} )

   }

  ngOnInit(): void {
  }

}