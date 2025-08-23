import { Component,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-table',
  imports: [],
  templateUrl: './employee-table.html',
  styleUrl: './employee-table.css',
  inputs:['employees'],
  outputs:['delEve']
})
export class EmployeeTable {
  employees:any;

  delEve=new EventEmitter();
  deletetherec(input:number){
    this.employees=this.employees.filter((emp:any)=>emp.eId!==input);
    this.delEve.emit(this.employees);
  }
}
