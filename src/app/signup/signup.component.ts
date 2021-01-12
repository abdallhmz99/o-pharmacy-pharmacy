import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms'
import {AuthService } from"../auth.service";
import {Router} from '@angular/router'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  signupForm=new FormGroup({
    'name':new FormControl(null,[Validators.required,Validators.pattern(/[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/)]),
    'phones':new FormControl(null,[Validators.required,Validators.minLength(4),Validators.maxLength(12)]),
    'email':new FormControl(null,[Validators.required,Validators.email]),
    'password':new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]),
    'confirmPassword':new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]),
    'locationAsAddress':new FormControl(null,[Validators.required]),
    

  });
  signUp(){
console.log(this.signupForm.value)

        this._AuthService.register(this.signupForm.value).subscribe(data=>{
          console.log(data)
          this._Router.navigateByUrl("/login");
        },
        err=>{
          console.log(err);
        });
         
  }
  constructor(private _AuthService:AuthService, private _Router:Router) { }

  ngOnInit(): void {
    
  }

}
