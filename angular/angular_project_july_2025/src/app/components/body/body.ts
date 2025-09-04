import { Component } from '@angular/core';
import { Databinding } from '../databinding/databinding';
import { Directives } from '../directives/directives';
import { EmployeeList } from '../employee-list/employee-list';
import { Demo1 } from '../demo1/demo1';
import { Products } from '../products/products';
import { EmployeeCRUD } from '../employee-crud/employee-crud';
import { PipesDemo } from '../pipes-demo/pipes-demo';
import { Empcrud } from '../empcrud/empcrud';
import { Empcomp } from '../empcomp/empcomp';
import { Httpclientdemo } from '../httpclientdemo/httpclientdemo';
import { Todo } from '../todo/todo';
import { TemplateDrivenform } from '../../template-drivenform/template-drivenform';
import { ModelDrivenform } from '../../model-drivenform/model-drivenform';
import { Formassignment } from '../formassignment/formassignment';
import { RouterOutlet } from '@angular/router';
import { FolderstructureAssignment } from '../folderstructure-assignment/folderstructure-assignment';

@Component({
  selector: 'app-body',
  imports: [
    //Directives,
  //EmployeeList,
//Demo1,
//Products
//EmployeeCRUD
//PipesDemo
//Empcrud
//Empcomp
// Httpclientdemo
// Todo
// TemplateDrivenform
//ModelDrivenform
// Formassignment
RouterOutlet,
FolderstructureAssignment],
  templateUrl: './body.html',
  styleUrl: './body.css'
})
export class Body {

}
