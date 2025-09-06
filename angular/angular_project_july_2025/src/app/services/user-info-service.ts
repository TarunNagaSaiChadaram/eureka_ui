import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
   private userRole="trainer";

   getUserRole(){
    return this.userRole;
   }
}
