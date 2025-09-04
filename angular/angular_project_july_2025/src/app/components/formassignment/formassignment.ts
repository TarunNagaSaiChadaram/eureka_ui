import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-formassignment',
  imports: [FormsModule,
    CommonModule],
  templateUrl: './formassignment.html',
  styleUrl: './formassignment.css'
})
export class Formassignment {

  submitassignmentForm(formDate:any){
    console.log(formDate)
  }
}
