import { Component } from '@angular/core';
import productArr from './employee_data';
import {NgxPaginationModule} from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar as solidStar} from '@fortawesome/free-solid-svg-icons';
import { faStar  as regStar} from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-employee-list',
  imports: [NgxPaginationModule,
  FontAwesomeModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeList {
  p:any = 1;
  products=productArr;
  solidStar=solidStar;
  regStar=regStar;
  searchTerm:string="";
}
