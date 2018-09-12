import {Pipe, PipeTransform} from '@angular/core';
import {Course} from '../models/course.class';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Pipe({
  name: 'filerArray'
})
export class FilerArrayPipe implements PipeTransform {

  transform(courselist: Course[], idSearch?: string,
            NameSearch?: string,
            desSearch?: string,
            priceSearch?: string,
            dateSearch?: string,
            statusSearch?: boolean,
            priceFilter?: string): any {
    if (idSearch) {
      courselist = courselist.filter(course => course.id.toString().toLowerCase().indexOf(idSearch.toLowerCase()) !== -1);
    }
    if (NameSearch) {
      courselist = courselist.filter(course => course.name.toLowerCase().indexOf(NameSearch.toLowerCase()) !== -1);
    }
    if (desSearch) {
      courselist = courselist.filter(course => course.decription.toLowerCase().indexOf(desSearch.toLowerCase()) !== -1);
    }
    if (priceSearch) {
      courselist = courselist.filter(course => course.fee.toString().toLowerCase().indexOf(priceSearch.toLowerCase()) !== -1);
    }
    if (dateSearch) {
      // courselist = courselist.filter(course => course.name.toLowerCase().indexOf(NameSearch.toLowerCase()) !== -1);
    }
    if (statusSearch) {
      courselist = courselist.filter(course => course.status.toString().toLowerCase().indexOf(statusSearch.toString()) !== -1);
    }
    if (priceFilter) {
      if (priceFilter === 'increases') {
        courselist = courselist.sort((a, b) => {
          return (a.fee) - (b.fee);
        });
      } else if (priceFilter === 'decreases') {
        courselist = courselist.sort((a, b) => {
          return (b.fee) - (a.fee);
        });
      } else {
        return courselist;
      }
    }
    return [...courselist];
  }

}
