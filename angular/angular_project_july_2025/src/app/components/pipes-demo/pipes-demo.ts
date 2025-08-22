import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NumbersuffixPipe } from '../../custom-pipes/numbersuffix-pipe';
import { RomanpipePipe } from '../../custom-pipes/romanpipe-pipe';
import { AgepipePipe } from '../../custom-pipes/agepipe-pipe';
import { SalutationPipe } from '../../custom-pipes/salutation-pipe';
import { SearchingPipe } from '../../custom-pipes/searching-pipe';

@Component({
  selector: 'app-pipes-demo',
  imports: [FormsModule,NumbersuffixPipe,RomanpipePipe,AgepipePipe,SalutationPipe,SearchingPipe],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css'
})
export class PipesDemo {

  num1:number=0;
  num2:number=0;
  date1:string="";

  employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
  ];

  searchtext:string="";
}
 