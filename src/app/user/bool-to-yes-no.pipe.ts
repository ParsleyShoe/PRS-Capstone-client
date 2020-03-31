import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolToYesNo'
})
export class BoolToYesNoPipe implements PipeTransform {

  transform(boolean:Boolean):string {
    return boolean ? "Yes" : "No";
  }

}
