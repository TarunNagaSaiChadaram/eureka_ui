import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agepipe'
})
export class AgepipePipe implements PipeTransform {

  transform(input:string){

    let age=0;

    if(!input){
      return ""
    }

    const today=new Date();

    const birthDay=new Date(input);

    let today_year=today.getFullYear();

    let birth_year=birthDay.getFullYear();

    age=today_year-birth_year;

    return age

  }

}
