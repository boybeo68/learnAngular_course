import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'fomatString'
})
export class FomatStringPipe implements PipeTransform {

  transform(value: string, args?: number): any {
    return value.slice(0, args) + ' ...';
  }

}
