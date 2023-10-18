import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageCountPipe} from "./page-count.pipe";
import {PageRangePipe} from "./page-range.pipe";
import {FormsModule} from "@angular/forms";
import {PaginatorComponent} from "./paginator.component";
import { IndexPipe } from './index.pipe';

@NgModule({
    declarations: [
        PageCountPipe,
        PageRangePipe,
        IndexPipe,
        PaginatorComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        PageCountPipe,
        PageRangePipe,
        PaginatorComponent,
        IndexPipe
    ]
})
export class PaginatorModule {
}
