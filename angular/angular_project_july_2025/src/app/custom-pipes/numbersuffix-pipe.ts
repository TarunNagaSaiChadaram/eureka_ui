import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numbersuffix'
})
export class NumbersuffixPipe implements PipeTransform {

  transform(input:number){
    if (input===null){
      return ""
    }
    if (input%10==1){
      return input+"st"
    }
    if (input%10==2){
      return input+"nd"
    }
    if (input%10==3){
      return input+"rd"
    }

    else{
      return input+"th"
    }
  }

}
