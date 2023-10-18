import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {PageCountPipe} from "./page-count.pipe";

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorComponent {
  @Input({required: true}) total = 0;
  @Input() disabled = false;
  @Input({required: true}) size = 10;
  @Output() sizeChange = new EventEmitter<number>();
  @Input() page = 1;
  @Output() pageChange = new EventEmitter<number>();
  constructor(private pageCount: PageCountPipe) {}
  lastPage() {
    this.pageChange.emit(this.pageCount.transform(this.total, this.size))
  }
}
