import { Component, OnInit } from '@angular/core';
// uthguard service  use karege taki usme isloggedin ko check kare ke true h ya nhi 
import { AuthserviceService } from '../authservice.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService:AuthserviceService) { }

  ngOnInit() {
  }
  // for logo 
  logo:string = "assets/img/img_logo.png";

  // for Menu 
  menu:any = [
  				// {
  				// 	id: 1,
  				// 	menuItem: "home" 
  				// },
  				{
  					id: 2,
  					menuItem: "about"
  				},
  				{
  					id: 3,
  					menuItem: "getdata"
  				},
  				{
  					id: 4,
  					menuItem: "services",
  					menuChild :  [
	  					{
		  					id: 1,
		  					menuItem: "services 1"
		  				},
		  				{
		  					id: 2,
		  					menuItem: "services 2"
		  				}
  					]
  				},
  				{
  					id: 5,
  					menuItem: "login"
  				},
          {
            id: 6,
            menuItem: "postdata"
          },
  				{
  					id: 7,
  					menuItem: "career",
  					menuChild :  [
	  					{
		  					id: 1,
		  					menuItem: "career 1"
		  				},
		  				{
		  					id: 2,
		  					menuItem: "career 2"
		  				}
  					]
  				}
  			] 
}
