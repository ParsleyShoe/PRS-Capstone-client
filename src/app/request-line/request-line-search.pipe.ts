import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'requestLineSearch'
})
export class RequestLineSearchPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
