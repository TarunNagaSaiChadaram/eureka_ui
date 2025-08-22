import { Component } from '@angular/core';
import employeeArr from './employee-crud-data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons';
import{faEye} from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';	
import { FormsModule } from '@angular/forms';
import Snackbar from 'awesome-snackbar';
@Component({
  selector: 'app-employee-crud',
  imports: [FontAwesomeModule,
  FormsModule],
  templateUrl: './employee-crud.html',
  styleUrl: './employee-crud.css'
})
export class EmployeeCRUD {
employeedetailsArr=employeeArr;
faTrash=faTrash;
faEye=faEye;

deletingRecord(employeeID :number){
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      this.employeedetailsArr=this.employeedetailsArr.filter(emp=>emp.id!==employeeID);
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  });
}

takenEmp:any=null;

seeEmp(emp:any){
  this.takenEmp=emp;
}

new_emp:any={
  id:null,
  name:"",
  username:"",
  email:"",
  address:{city:""},
  phone:"",
  website:"",
  company:{name:""}
};

addEmployee(){
  this.employeedetailsArr.push({...this.new_emp});

  this.new_emp={
    id:null,
    name:"",
    username:"",
    email:"",
    address:{city:""},
    phone:"",
    website:"",
    company:{name:""}
  };
};

openSnackbar(){
  new Snackbar('Employee successfully added',
      { position: 'top-center', theme: 'light', timeout: 5000, actionText: 'X' }
    );
}


}
