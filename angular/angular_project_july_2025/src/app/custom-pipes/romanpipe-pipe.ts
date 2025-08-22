import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'romanpipe'
})
export class RomanpipePipe implements PipeTransform {

  transform(input:number){
    let roman_number=[1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let roman_symbol=["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let rom_num="";
    if(!input || input<=0){
      return ""
    }
    for(let i=0;i<=roman_symbol.length;i++){
        while(input>=roman_number[i]){
          input=input-roman_number[i]
          rom_num=rom_num+roman_symbol[i]
        }
    }
    return rom_num;
  }

}
