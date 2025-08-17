import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [
    FormsModule
  ],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css'
})
export class Databinding {
  myName: string = 'Virat Kohli';
  img_url: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1024px-Angular_full_color_logo.svg.png?20160527092314';

  flag: boolean = false;

  isitvis:boolean=true;

  textmax:string="";

  textmaxlen:number=100;

  stateselected:string="";

  firstnumber:number=0;
  secondnumber:number=0;
  opt:string=""

  count:number=0;

  color:string="white";

  totoggel(){
    this.isitvis=!this.isitvis;
  }

  addToCart() {
    alert('Your Item is added to Cart!!!');
  }
}