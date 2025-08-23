import { Component } from '@angular/core';
import { EmployeeTable } from '../employee-table/employee-table';
import { EmployeeAdd } from '../employee-add/employee-add';

@Component({
  selector: 'app-empcrud',
  imports: [EmployeeTable,
  EmployeeAdd],
  templateUrl: './empcrud.html',
  styleUrl: './empcrud.css'
})
export class Empcrud {
  employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
  ];

  updatedArr(input:any){
    this.employees=input

  }

  newArr(input:any){
    this.employees=[...this.employees,input]
  }
}
