import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searching'
})
export class SearchingPipe implements PipeTransform {

  transform(emp:any,searchstring:string){
    if(!searchstring){
      return emp
    }

    else{
     return emp.filter((emp:any)=>emp.eId===+searchstring);
    }

  }

}
