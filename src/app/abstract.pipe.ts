import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abstract'
})
export class AbstractPipe implements PipeTransform {

  transform(value: string = '', limit: number = 20): any {
    if (!value) { return null; }
    return value.substr(0, limit) + '...';
  }

}
