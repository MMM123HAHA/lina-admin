import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexName'
})
export class SexNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value =="1"){
      return "男"
    }else{
      return "女"
    }
  }

}
