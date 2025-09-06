import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import * as data from './users.json'

@Component({
  selector: 'app-users',
  imports: [
    NgxPaginationModule,
    RouterLink
  ],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users {
usersArr=(data as any).default;

p:any=1;

constructor(){
  console.log(data);
}

}
