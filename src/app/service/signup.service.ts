import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SignupService {
	serviceLink = "yes"
	menu:any = [
  				{
  					id: 1,
  					menuItem: "home"
  				},
  				{
  					id: 2,
  					menuItem: "about"
  				},
  				{
  					id: 3,
  					menuItem: "blog"
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
            menuItem: "signin"
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
	constructor() { }
}
