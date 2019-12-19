import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//post service hai 
import { PostdataService } from '../service/postdata.service';
//auth service hai ye 
import { AuthserviceService } from '../authservice.service';
// route ke liye
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	logIn:FormGroup;
	submitted = false;
    common;
  constructor(public postservice:PostdataService, private authservice:AuthserviceService, private myRoute:Router) { }

  ngOnInit() {
  	this.logIn = new FormGroup({
  		email: new FormControl('',Validators.compose([
  				Validators.required,
  				Validators.pattern("[^ @]*@[^ @]*")
  			])),
  		passwd: new FormControl('',Validators.compose([
  			Validators.required,
  			Validators.maxLength(8),
  			Validators.minLength(6)
  			])),
  	});
  }
  get f(){
  	return this.logIn.controls
  }

  logInSubmit(){
  	this.submitted = true;
  	if(this.logIn.invalid){
        // this.postservice.POST("loin",this.logIn.value).subscribe(res =>{
        //     this.common = res;
        //     console.log("login response",this.common);
        //     this.authservice.sendToken(this.common.token)
        // });
  	     return true;
    }
        this.authservice.sendToken("login");
        console.log();
        this.myRoute.navigate(['']);
  	     console.log(this.logIn.value);
  }

}
