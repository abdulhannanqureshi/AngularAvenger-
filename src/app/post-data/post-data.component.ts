import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostdataService } from '../service/postdata.service'

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {
	postData ;
	submitted = false;
	formStatus = false;
	formData = [];
    personName ;
    // url:string = "http://localhost:3200/data"; 
  constructor(public service:PostdataService ) { }
 
  ngOnInit() {
  	this.postData = new FormGroup({
  		fname: new FormControl('',Validators.required),
  		email: new FormControl('',Validators.compose([
  			Validators.required,
  			Validators.email
  		])),
  		pass: new FormControl('',Validators.compose([
  			Validators.required,
  			Validators.maxLength(12),
  			Validators.minLength(6),
  			Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}') // for strong password
  		])),
  		categeory: new FormControl('',Validators.required),
  		file: new FormControl('',Validators.required),
  		gen: new FormControl('',Validators.required),
  		message: new FormControl('',Validators.required),
  	});
    console.log("service is :", this.service.postService)
    // this.service.GET().subscribe(resGet =>{
    //     this.personName = resGet
    //     console.log("persone name is ", this.personName)
    // })
  }
  get inF(){
  	return this.postData.controls
  } 
  formStsMthd(){ // for hide sms 
  	this.formStatus = false; 
  }

  postDataSubmit(){
  	this.submitted = true;
  	if(this.postData.invalid){
  		return false
  	}
  	this.formData.push(this.postData.value);
  	console.log("Form Data ", this.formData)
    
    // post data ke liye post methode submit me likhna hogi qk data bhejna hoga form me
    this.service.POST("postdata",this.postData.value).subscribe(res=>{
        console.log(res);
    })

  	
  	this.formStatus = true;
  	setTimeout(()=>{ // for hide sms 
  		this.formStsMthd();
  	}, 3000);

 	this.resetFome();
  }

  	resetFome(){
  		this.submitted = false;
  		this.postData.reset()
  	} 



}
