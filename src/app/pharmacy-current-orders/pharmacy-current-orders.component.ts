import { Component, OnInit } from '@angular/core';
import{PharmacyCurrentOrdersService} from '../services/pharmacy-current-orders.service';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-pharmacy-current-orders',
  templateUrl: './pharmacy-current-orders.component.html',
  styleUrls: ['./pharmacy-current-orders.component.scss']
})

export class PharmacyCurrentOrdersComponent implements OnInit {

  
  pharmacyCurrentOrderData: any;
  customerdata:any;
  orderDate: any;
  orderTime: any;
  customerName :any;
  customerphoto:any;
  customerphone:any;
  customerAddress:any;
  lng: any;
  latt: any;
  orderStatus:any;
  orderText:any;
  orderPhoto:any;

  constructor(private _PharmacyCurrentOrdersService:PharmacyCurrentOrdersService) {
    this.api(_PharmacyCurrentOrdersService);
}



   api(_PharmacyCurrentOrdersService:PharmacyCurrentOrdersService) { setTimeout(() => {
    console.log("ay haga");
    _PharmacyCurrentOrdersService.pharmacyCurrentOrder().subscribe( (data)=>{
      if(data.message=='success')        
      {  this.pharmacyCurrentOrderData = data.pharmacyOrders[0].orderdata;
        this.customerdata=data.pharmacyOrders[0].customersData;
        this.orderDate=this.pharmacyCurrentOrderData.date.substring(0,10);
        this.orderTime=this.pharmacyCurrentOrderData.date.substring(11,19);
        this.customerName=this.customerdata.name;
        this.customerphoto=this.customerdata.photo;
        this.customerphone=this.customerdata.phone;
        this.customerAddress=this.customerdata.locationAsAddress
        this.lng=this.customerdata.locationAsCoordinates.coordinates.lon;
        this.latt=this.customerdata.locationAsCoordinates.coordinates.lat;
        this.orderStatus=this.pharmacyCurrentOrderData.globalStatus;
        this.orderPhoto=this.pharmacyCurrentOrderData.orderByPhoto;
        this.orderText=this.pharmacyCurrentOrderData.orderByTexting;
        this.map();
        //this.api(_PharmacyCurrentOrdersService);
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
    }, 3000);
  
     }



   done()
   {
     this._PharmacyCurrentOrdersService.doneOrder(this.pharmacyCurrentOrderData._id).subscribe(d => {
       
      console.log(d)
      console.log('done')
       window.location.reload();
     },
       err => {
         console.log(err);
       })
 
   }
 


   map() {
    console.log(this.lng,this.latt)
    const accessToken = 'pk.eyJ1IjoibXVzdGFmYWFiZGVsYmFkZWEiLCJhIjoiY2tpbHcwNmg2MG0wNjJ2cDlxbXI2NGZxbSJ9.h5Kephiwr11YMCfLXs14FQ';
    var map = new mapboxgl.Map({
      accessToken,
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.lng, this.latt], // starting position
      zoom: 10,// starting zoom
      trackResize: true
    });
  var marker1 = new mapboxgl.Marker()
        .setLngLat([this.lng,this.latt])
        .addTo(map);

  }   




  ngOnInit(): void {
  }

}