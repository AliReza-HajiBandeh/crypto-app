import {NgModule} from '@angular/core';
import {PaginatorModule} from "./paginator/paginator.module";
import {SwitchComponent} from "./switch/switch.component";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        PaginatorModule,
        SwitchComponent
    ],
    exports: [
        PaginatorModule,
        SwitchComponent
    ]
})
export class CommonComponentsModule {
}
