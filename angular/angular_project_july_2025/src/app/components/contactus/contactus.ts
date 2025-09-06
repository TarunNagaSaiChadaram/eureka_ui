import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contactus',
  imports: [FormsModule,
    CommonModule],
  templateUrl: './contactus.html',
  styleUrl: './contactus.css'
})
export class Contactus {
  hasChanges:any=true;
  user={
    
  }
submitMyForm(formDate:any){
  console.log(formDate)
  this.hasChanges=false;
}
}
