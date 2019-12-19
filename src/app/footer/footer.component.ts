import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    // for logo 
  logo:string = "assets/img/img_logo.png";
  mapImg:string = "assets/img/img_map.png";
	
	// footerMenu
	resourMenu:any = [
		{
			id: 1,
			item: "gallery"
		},
		{
			id: 2,
			item: "career"
		},
		{
			id: 3,
			item: "faq"
		},
		{
			id: 4,
			item: "join us"
		},
		{
			id: 5,
			item: "about us"
		}
	]
	quickMenu:any = [
		{
			id: 1,
			item: "gallery"
		},
		{
			id: 2,
			item: "career"
		},
		{
			id: 3,
			item: "faq"
		},
		{
			id: 4,
			item: "join us"
		},
		{
			id: 5,
			item: "about us"
		}
	]
	aboutMenu:any = [
		{
			id: 1,
			item: "privacy policy"
		},
		{
			id: 2,
			item: "contact"
		}
	]
}
