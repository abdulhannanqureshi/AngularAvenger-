import { Injectable } from '@angular/core';
// post ke liye httpclient ke sath httpheaders bhi dena hai qk ye header post data ka type btate hai   
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PostdataService {
	postService = "connected";
	private _url: string = "/assets/data/person.json"; // jab ham local data use karege yani assets me data me json fie rakhege 
	private apiUrl = "http://jsonplaceholder.typicode.com/users";



	url:string = "http://localhost:3200/data/";  // ye local ka url hai yani jo node apni local machine pe hai uska 

	constructor(private http:HttpClient) { }

	POST(url,data){

		// let data2 = {
		// 	'email':'abc@gmail.com',
		// 	'password':'password',
		// }
		const uri = this.url + url;
		console.log("API URl", uri)
		
		const httpOptions =
		{
			headers: new HttpHeaders({

				// 'Authorization': 'Your Token',
				// 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
				'Content-Type': 'application/json'
			})
		};
		return this.http.post(this.url, data, httpOptions)
	}
} 
