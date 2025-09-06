import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
@Component({
  selector: 'app-usersdetails',
  imports: [],
  templateUrl: './usersdetails.html',
  styleUrl: './usersdetails.css'
})
export class Usersdetails {
user:any;
constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) {
}
ngOnInit() {
  this.activatedRoute.params.pipe(switchMap((params: any) =>
    this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  )).subscribe((userResponse: any) => {
    this.user = userResponse;
  });
}
}