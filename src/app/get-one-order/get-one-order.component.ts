import { Component, OnInit } from '@angular/core';
import{PharmacyOrderHistoryService}from'../services/pharmacy-order-history.service';
import{ActivatedRoute}from '@angular/router';
import * as mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-get-one-order',
  templateUrl: './get-one-order.component.html',
  styleUrls: ['./get-one-order.component.scss']
})
export class GetOneOrderComponent implements OnInit {

  orderId:any;
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
  
  constructor(_ActivatedRoute:ActivatedRoute,private _PharmacyOrderHistoryService:PharmacyOrderHistoryService) 
  {
    this.orderId =  _ActivatedRoute.snapshot.paramMap.get('currentOrder')
    _PharmacyOrderHistoryService.oneOrder(this.orderId).subscribe(

      (data)=>{
        if (data.message=='success') {
          this.pharmacyCurrentOrderData=data.orderData;
          this.customerdata=data.customersData;
          this.lng=this.customerdata.locationAsCoordinates.coordinates.lon;
          this.latt=this.customerdata.locationAsCoordinates.coordinates.lat;
          this.orderDate=this.pharmacyCurrentOrderData.date.substring(0,10);
          this.orderTime=this.pharmacyCurrentOrderData.date.substring(11,19);
          this.orderStatus=this.pharmacyCurrentOrderData.globalStatus;
          this.orderText=this.pharmacyCurrentOrderData.orderByTexting;
          this.orderPhoto=this.pharmacyCurrentOrderData.orderByPhoto;
          this.customerName=this.customerdata.name;
          this.customerphone=this.customerdata.phone;
          this.customerAddress=this.customerdata.Address;
          this.customerphoto=this.customerdata.photo;
          this.map();
        
        }
        else if (data.message="no order founds") {
          this.pharmacyCurrentOrderData=null;
          this.customerdata=null;
        }

      },
      (error)=>{
              console.log(error) ;
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
