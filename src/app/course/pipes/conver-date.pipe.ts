import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'converDate'
})
export class ConverDatePipe implements PipeTransform {
  private dateConver = '';

  transform(value: any, args?: any): any {
    this.dateConver = moment(value).format('YYYY/MM/DD HH:mm');
    return this.dateConver;
  }
}
