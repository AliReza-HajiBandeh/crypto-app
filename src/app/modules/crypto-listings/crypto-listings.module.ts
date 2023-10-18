import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CryptoListingsComponent} from './crypto-listings.component';
import {CommonComponentsModule} from "../../common/components/common-components.module";
import {RouterModule} from "@angular/router";
import {CryptoService} from "../../common/services/crypto.service";
import {PageCountPipe} from "../../common/components/paginator/page-count.pipe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        CryptoListingsComponent
    ],
    exports: [
        CryptoListingsComponent
    ],
    imports: [
        CommonModule,
        CommonComponentsModule,
        RouterModule.forChild([{path: '', component: CryptoListingsComponent}]),
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [CryptoService, PageCountPipe]
})
export class CryptoListingsModule {
}
