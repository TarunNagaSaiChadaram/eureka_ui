import { Component } from '@angular/core';
import productArr from './product_details';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar as solidStar} from '@fortawesome/free-solid-svg-icons';
import { faStar  as regStar} from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-products',
  imports: [NgxPaginationModule,
    FontAwesomeModule,
  FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  filteredproductArr=productArr;
  p:any=1;
  solidStar=solidStar;
  regStar=regStar;
  searchText:string="";
  filterData(){
    this.filteredproductArr=productArr.filter(prod=>{
      return prod.title.toLowerCase().includes(this.searchText.toLowerCase())
    });
  }
  sortbypriceAsc(){
    this.filteredproductArr.sort((prod1,prod2)=>prod1.price-prod2.price);
  }

  sortbypriceDesc(){
    this.filteredproductArr.sort((prod1,prod2)=>prod2.price-prod1.price);
  }
}
