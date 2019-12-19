import { Injectable } from '@angular/core';
//isme post or get service hai jisse ham check karege 
import { PostdataService } from './service/postdata.service';
// ye page navigate ke liya hai jisse ham page navigate karege
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private myRoute:Router, private service:PostdataService) { }
  
  // isme ham token get karke local storage me save karege jisse ham check karege k login h ya nhi 
  
  sendToken(token: string){
  	localStorage.setItem("LoggedInUser", token)
  } 
  
  // isse ham token get karke check karege ke hai ya nhi token agar hai to login or nhi hai to logout
  getToken(){
    return localStorage.getItem("LoggedInUser");
  }

  // isse ham check karege k token null hai ya nhi agar null hai to false jaege or null nhi h to true jaege
  isLoggedIn(){
  	return this.getToken() !== null;
  }
 
  //ye logout hone per run hoga
  logout(){
  	localStorage.removeItem("LoggedInUser"); // isse token null hojaege qk logout me hame token null chahiye
  	this.myRoute.navigate(['login']); // isse hame naviget karege login page pe qk logout hogya hai 
  }
}

