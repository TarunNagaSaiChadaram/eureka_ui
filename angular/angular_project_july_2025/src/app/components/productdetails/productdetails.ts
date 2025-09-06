import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-productdetails',
  imports: [],
  templateUrl: './productdetails.html',
  styleUrl: './productdetails.css'
})
export class Productdetails {
  prod:any
  constructor(public activatedRoute: ActivatedRoute) {		
	}
	ngOnInit(){
		this.activatedRoute.queryParams.subscribe((queryparams) => {
		  console.log(queryparams);
		  this.prod = queryparams;
		});
	}

}
