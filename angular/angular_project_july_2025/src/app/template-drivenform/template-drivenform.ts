import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-drivenform',
  imports: [FormsModule,
  CommonModule],
  templateUrl: './template-drivenform.html',
  styleUrl: './template-drivenform.css'
})
export class TemplateDrivenform {
  user={
    
  }
submitMyForm(formDate:any){
  console.log(formDate)
}
}
