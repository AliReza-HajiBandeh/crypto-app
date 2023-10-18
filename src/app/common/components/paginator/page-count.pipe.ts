import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pageCount'
})
export class PageCountPipe implements PipeTransform {
  transform(total: number, size: number): number {
    return total % size === 0 ? total / size : (Math.floor(total / size) + 1);
  }
}
