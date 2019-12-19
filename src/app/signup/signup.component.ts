import { Component, OnInit } from '@angular/core';
// for Form Builder 
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
// for service 
import { SignupService } from '../service/signup.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  data = [];
  formData = [];
  signUp:FormGroup; // variable for form name and form grouping
  submitted = false; // variable for validation

  constructor(private fb:FormBuilder, public signupService:SignupService) { }
  ngOnInit() {
  	this.signUp = this.fb.group({
  		fname: ['hannan',Validators.required],
  		email: ['',[Validators.required, Validators.email]],
  		pass: ['',[Validators.required, Validators.minLength(6), Validators.maxLength(8)]],
  		categeory: ['',Validators.required],
  		file: ['',Validators.required],
  		gen: ['',Validators.required],
  		message: ['',[Validators.required, Validators.minLength(10)]]
  	});


     // for service
    // for fetch service data
    console.log("serviceLink variable :"+this.signupService.serviceLink);
    console.log("serviceLink Array :", this.signupService.menu);
    // is array me push array data but ye 0 index pe jakar save ho rha hai ab
    // agar me forloop isme lgauga to data nhi aega bahar 
    this.data.push(this.signupService.menu);
    console.log("service array push on empty data array ", this.data);

  }

  // for form validation and get form field easiliy or select form firld
  get inF(){
  	return this.signUp.controls
  }

  signUpSubmit(){
	this.submitted = true; // variable for validation

  	// for form data not send when each field not fill 
  	if(this.signUp.invalid){
  		return false;
  	}
      console.log(this.signUp.value);
      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signUp.value, null, 4));
    
    // for formdata ko empty array me push kraya hai  
    this.formData.push(this.signUp.value);
    console.log("formdata",this.formData); 
  	this.onReset();
  }
  onReset(){
    this.submitted = false; // variable for validation
    this.signUp.reset();
  }
}
