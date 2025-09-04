import { Component } from '@angular/core';
import {FormGroup, ReactiveFormsModule ,FormControl} from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-model-drivenform',
  imports: [ReactiveFormsModule,
    CommonModule],
  templateUrl: './model-drivenform.html',
  styleUrl: './model-drivenform.css'
})
export class ModelDrivenform {
  myForm:any;
  constructor(){
    this.createMyForm();
  }
  createMyForm(){
    this.myForm=new FormGroup({
      firstName:new FormControl(''),
      lastName:new FormControl(''),
      email:new FormControl(''),
      address:new FormGroup({
        city:new FormControl(''),
        state:new FormControl(''),
        pincode:new FormControl('')
      }

      )

    })
  }
  submitMyForm(formDate:any){
    console.log(formDate)
  }
}
