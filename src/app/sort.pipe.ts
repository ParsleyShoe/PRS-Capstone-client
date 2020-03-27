import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(items:any[], sortBy:string, asc:boolean):any[] {
    if (items == null || items.length == 0) return items;
    const sortFn = (a:any, b:any):number => {
      let x = this.setValue(a[sortBy]);
      let y = this.setValue(b[sortBy]);
      if (x === y) return 0;
      if (asc) return (x < y) ? -1 : 1;
      return (x > y) ? -1 : 1;
    }
    return items.sort(sortFn);
  }

  setValue = (colValue:any) => {
    if (colValue == null) return "";
    if (typeof colValue == "number") return colValue;
    return colValue.toString().toLowerCase();
  };

}
