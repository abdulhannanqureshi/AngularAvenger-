import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../service/getdata.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent implements OnInit {
	finalData:any = [];
  userName;
	constructor(public service:GetdataService) { }

  ngOnInit() {
  	
  	this.service.GET().subscribe(res =>{
      // all data put in empty array 
  		this.finalData = Array.from(Object.keys(res), x => res[x]);
  		console.log("final Data" ,this.finalData);
      // ye single value k liye hai or variable lena hai or index bhi lena h qk ham loop nhi chla rhe hai isme ager index nhi lege to wo undefine dega qk object key(name,id,username and etc )qk ye sab isme bar bar h to konsi index ka name ya id chahiye us iye  
      this.userName = res[0].name;
      console.log("User name ",this.userName);
  	});
  }
}
