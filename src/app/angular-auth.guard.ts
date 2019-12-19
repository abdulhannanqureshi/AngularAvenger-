import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
// authguard ki service link karege jha 4 methode bnai hai 
import { AuthserviceService } from './authservice.service';
// or ye rout k liye h jha page redirect karna hai navigate se
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AngularAuthGuard implements CanActivate {
	// yha auth service or router define kie hai us karne k liye
  constructor(private authService:AuthserviceService, private myRoute:Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authService.isLoggedIn()){
     	return true;
    }
    else{
    	this.myRoute.navigate(["login"]);
     	return false;
    }
  } 
  
} 
