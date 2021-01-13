import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService } from"../auth.service";
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {
  token:any;
 
  constructor(private _AuthService:AuthService, private _Router:Router, private _ActivatedRoute:ActivatedRoute) { 

    this.token=_ActivatedRoute.snapshot.paramMap.get("token");
    this._AuthService.verifyEmail(this.token).subscribe(data=>{
      console.log(data)
    },
      err=>{
        console.log(err);
      });
  }


     

  ngOnInit(): void {
  }

}
