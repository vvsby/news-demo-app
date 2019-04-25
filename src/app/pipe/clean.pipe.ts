import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clean'
})
export class CleanPipe implements PipeTransform {

  transform(value: string): any {
    if (value) {
      const response = value.slice(0, value.lastIndexOf('['));
      return response;
    } else {
      return null;
    }
  }

}
