import { CanActivateFn } from '@angular/router';
import { UserInfoService } from '../services/user-info-service';
import {inject} from '@angular/core'

export const trainerGuard: CanActivateFn = (route, state) => {
  const userInfoService=inject(UserInfoService)
  if(userInfoService.getUserRole()==='trainer'){
    return true;
  }
  else{
    alert("Sorryy!!This page is not for you")
    return false;
  }
};
