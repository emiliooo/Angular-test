import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortTitle'
})
export class SortTitlePipe implements PipeTransform {

  transform(value: any[], args?: any): any[] {
    if(args === undefined || args === '') return value;

    return value.filter(function(val) {
      if (!val.title || !args) return false;
      return val.title.includes(args);
    });
  }

 

}
