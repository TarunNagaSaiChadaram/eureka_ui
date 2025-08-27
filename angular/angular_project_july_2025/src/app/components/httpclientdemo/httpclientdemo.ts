import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-httpclientdemo',
  imports: [FormsModule],
  templateUrl: './httpclientdemo.html',
  styleUrl: './httpclientdemo.css'
})
export class Httpclientdemo {
  user_api_url="http://localhost:3000/employees"
  employees:any;
  new_emp={
    id:null,
    firstName:"",
    lastName:"",
    email:"",
    gender:"",
    sal:null
  }
  isLoad:boolean=false;

  constructor(private httpClient: HttpClient) { 

  };
  ngOnInit(){

    this.fetchUsers();
  
  }
  fetchUsers(){
    this.isLoad=true;
    this.httpClient.get(this.user_api_url).subscribe(
      (response) => { 
        this.employees=response;
        console.log(response);
        this.isLoad=false;
       },
       (error) => { console.log(error) },
       () => { console.log('all data received') }
      );
}

  puttingUsers(empArr:any){
    this.isLoad=true;
    this.httpClient.post(this.user_api_url,empArr).subscribe(
      (response)=>{
        console.log("Added:",response);
        this.fetchUsers();
        this.new_emp={id:null,firstName:"",lastName:"",email:"",gender:"",sal:null}
      }
    );
  }

  deleteEmp(empArr:any){
    this.httpClient.delete(`${this.user_api_url}/${empArr.id}`).subscribe(
      (response)=>{
        console.log("Deleted:",response);
        this.fetchUsers();
      }
    )
  }

  editEmp(emp:any){
    this.new_emp={...emp};
  }

  updateEmp(empArr:any){
    this.isLoad=true;
    this.httpClient.put(`${this.user_api_url}/${empArr.id}`,empArr).subscribe(
      (response)=>{
        this.fetchUsers();
        this.new_emp={id: null, firstName: "", lastName: "", email: "", gender: "", sal: null };
      }
    );
  }
  
}
