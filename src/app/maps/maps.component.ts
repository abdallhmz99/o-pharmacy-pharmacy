import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';
import  * as mapboxgl from 'mapbox-gl';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  

  constructor() { }
  
  ngOnInit(): void {
    var lon=30.013056,lat=31.208853;
    const accessToken='pk.eyJ1IjoibXVzdGFmYWFiZGVsYmFkZWEiLCJhIjoiY2tpbHcwNmg2MG0wNjJ2cDlxbXI2NGZxbSJ9.h5Kephiwr11YMCfLXs14FQ';
    var map = new mapboxgl.Map({
      accessToken,
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [ 30.013056, 31.208853], // starting position
    zoom: 9,// starting zoom
    trackResize:true 
    });


    var geolocate = new mapboxgl.GeolocateControl( { positionOptions: {
      enableHighAccuracy: false
      },
      trackUserLocation: true
   
      });

map.addControl(geolocate);

geolocate.on('geolocate', function(e:any) {
       lon = e.coords.longitude;
       lat = e.coords.latitude
      var position = [lon, lat];
      console.log(position);
      
});







      // options.
    var marker = new mapboxgl.Marker({
      draggable: true
      }).setLngLat([lon, lat]).addTo(map);
      function onDragEnd() {
      var lngLat = marker.getLngLat();
      console.log(lngLat.lng ,lngLat.lat )
      }

      marker.on('dragend', onDragEnd);
  }
}
