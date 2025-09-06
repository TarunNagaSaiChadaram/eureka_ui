import { Component } from '@angular/core';
import { Router,RouterLink } from '@angular/router';
@Component({
  selector: 'app-aboutus',
  imports: [RouterLink],
  templateUrl: './aboutus.html',
  styleUrl: './aboutus.css'
})
export class Aboutus {
constructor (private routerObj:Router){
  
}
dosomethingandgohome() {
  console.log('Doing Something..')
  this.routerObj.navigateByUrl('/home')
}
}
