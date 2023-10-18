import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'index'
})
export class IndexPipe implements PipeTransform {

  transform(index: number, page: number, size: number): number {
    return page === 1 ? index + 1 : (page - 1) * size + index + 1;
  }
}
