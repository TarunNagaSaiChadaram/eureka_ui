import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation'
})
export class SalutationPipe implements PipeTransform {

  transform(input:string,gen:string){
        if(gen==="male"){
          return "Mr."+input
        }
        else{
          return "Miss."+input
        }
  }

}
