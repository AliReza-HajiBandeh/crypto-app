import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pageRange'
})
export class PageRangePipe implements PipeTransform {
  transform(page: number, size: number, total: number): string {
    return `${((page - 1) * size) + 1} - ${((page) * size > total ? total : page * size)} from ${total} records`;
  }
}
