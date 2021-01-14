import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from "../auth.service";
import { Router } from '@angular/router';
import * as mapboxgl from 'mapbox-gl';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  //get data from form 
  signupForm = new FormGroup({
    'name': new FormControl(null, [Validators.required, Validators.pattern(/[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/)]),
    'phones': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(12)]),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]),
    'confirmPassword': new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]),
    'locationAsAddress': new FormControl(null, [Validators.required]),
    'flat': new FormControl(null, [Validators.required]),
    'floor': new FormControl(null, [Validators.required]),
    'building': new FormControl(null, [Validators.required]),
  });
  //signup button 
  signUp() {
    //data is the json that will send to backend
    let data = {
      name: this.signupForm.value.name,
      phones: this.signupForm.value.phones,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password,
      confirmPassword: this.signupForm.value.confirmPassword,
      //concat address 
      locationAsAddress: this.signupForm.value.locationAsAddress + ' building:' + this.signupForm.value.building + ' floor:' + this.signupForm.value.floor + ' flat:' + this.signupForm.value.flat,
      locationAsCoordinates: {
        coordinates: {
          lat: this.latt, lon: this.lng
        }
      }
    }
    console.log(data);
    //check if user used map to enter location or not the function return true or false 
    if (this.checklocation(this.latt, this.lng) != false) {
      //if used map add the user 
      this._AuthService.register(data).subscribe(d => {
        console.log(d)
      },
        err => {
          console.log(err);
        })
    } else {
      console.log('enter coordinates')
    }
  }
  //check if user used map to enter location or not the function return true or false 
  checklocation(ln: any, la: any): any {
    if (ln == undefined || ln == null)
      return false
  }
  lng: any;
  latt: any;
  //mapbox
  map() {
    const accessToken = 'pk.eyJ1IjoibXVzdGFmYWFiZGVsYmFkZWEiLCJhIjoiY2tpbHcwNmg2MG0wNjJ2cDlxbXI2NGZxbSJ9.h5Kephiwr11YMCfLXs14FQ';
    var map = new mapboxgl.Map({
      accessToken,
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [30.013056, 31.208853], // starting position
      zoom: 9,// starting zoom
      trackResize: true
    });
    //to get coord when click on button
    var geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: false
      },
      trackUserLocation: true

    });
    map.addControl(geolocate);
    geolocate.on('geolocate', (e: any) => {
      this.lng = e.coords.longitude;
      this.latt = e.coords.latitude
      var position = [this.lng, this.latt];
      console.log(position)
      return position;

    });
  }
  constructor(private _AuthService: AuthService, private _Router: Router) { }
  ngOnInit(): void {
    //calll the map
    this.map()
  }
}
