import { Component } from '@angular/core';
import { Databinding } from '../databinding/databinding';
import { Directives } from '../directives/directives';
import { EmployeeList } from '../employee-list/employee-list';
import { Demo1 } from '../demo1/demo1';
import { Products } from '../products/products';
import { EmployeeCRUD } from '../employee-crud/employee-crud';
import { PipesDemo } from '../pipes-demo/pipes-demo';

@Component({
  selector: 'app-body',
  imports: [//Directives,
  //EmployeeList,
//Demo1,
//Products
//EmployeeCRUD
PipesDemo],
  templateUrl: './body.html',
  styleUrl: './body.css'
})
export class Body {

}
