import { Component } from '@angular/core';
import { Employee } from '../../services/employee';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empcomp',
  imports: [FormsModule],
  templateUrl: './empcomp.html',
  styleUrl: './empcomp.css'
})
export class Empcomp {
constructor(private empService:Employee){

};
allemp:any;
maleemp:any;
femaleemp:any;

selectedemp:string="all";
ngOnInit(){
  console.log(this.empService.getAllEmployees());
  this.allemp=this.empService.getAllEmployees();
  console.log(this.empService.getMaleEmployees())
  this.maleemp=this.empService.getMaleEmployees();
  console.log(this.empService.getFemaleEmployees());
  this.femaleemp=this.empService.getFemaleEmployees();
}

filteredEmp(){
  if(this.selectedemp=="maleemp"){
    return this.maleemp;
  }
  else if(this.selectedemp=="femaleemp"){
    return this.femaleemp;
  }
  else{
    return this.allemp;
  }
}
}
