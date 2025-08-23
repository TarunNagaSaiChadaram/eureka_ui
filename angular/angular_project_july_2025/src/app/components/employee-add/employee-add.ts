import { Component,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-employee-add',
  imports: [FormsModule],
  templateUrl: './employee-add.html',
  styleUrl: './employee-add.css',
  outputs:['addEve']
  
})
export class EmployeeAdd {
  new_emp:any={
    eId:null,
    name:"",
    sal:null,
    gender:""
  }

  addEve=new EventEmitter();
  addEmployee(input:any){
    this.addEve.emit(this.new_emp)
    this.new_emp={
      eId:null,
      name:"",
      sal:null,
      gender:""
  }
}

}
