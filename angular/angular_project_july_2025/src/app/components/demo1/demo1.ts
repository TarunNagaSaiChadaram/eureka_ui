import { Component } from '@angular/core';
import Swal from 'sweetalert2';	
@Component({
  selector: 'app-demo1',
  imports: [],
  templateUrl: './demo1.html',
  styleUrl: './demo1.css'
})
export class Demo1 {
  openSweetAlert(){
    Swal.fire({
      title:"Hello Guys",
      text:"This is Sweet Alert",
      icon:'success',
      timer:2000
    })
  }
}
