import { Injectable } from '@angular/core';
// httpClient module ye data get karne ke liye or post ke liye bhi
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetdataService {
	
	private apiUrl = "http://jsonplaceholder.typicode.com/users";
	constructor(private http:HttpClient) { }

	GET(){
		return this.http.get(this.apiUrl);
	}
}
