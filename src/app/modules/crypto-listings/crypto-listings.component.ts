import {Component, OnDestroy} from '@angular/core';
import {Cryptocurrency, SortDir, SortItem} from "../../common/types/crypto-listings.types";
import {CryptoService} from "../../common/services/crypto.service";
import {finalize, Subscription} from "rxjs";
import {FormBuilder} from "@angular/forms";

@Component({
    selector: 'app-crypto-listings',
    templateUrl: './crypto-listings.component.html',
    styleUrls: ['./crypto-listings.component.scss'],
})
export class CryptoListingsComponent implements OnDestroy {
    cryptoList: Cryptocurrency[] = [];
    total = 0;
    selectedIndex = 0;
    // thSort: SortItem = {
    //     sort: 'name',
    //     sort_dir: null
    // }
    paginator = {
        start: 1,
        limit: 10,
    };
    sortDirs = [
        {value: null, text: '[ ]'},
        {value: 'asc', text: '[ASC]'},
        {value: 'desc', text: '[DESC]'}
    ];
    filters = {
        name: '',
        symbol: ''
    }
    sortParams: SortItem[] = [
        {sort: 'market_cap', sort_dir: null},
        {sort: 'name', sort_dir: null},
        {sort: 'price', sort_dir: null},
        {sort: 'circulating_supply', sort_dir: null},
    ];
    searchParams: any = {
        sort: null,
        sort_dir: null,
        convert: 'USD',
    }
    cryptoListing$!: Subscription;

    constructor(private service: CryptoService, private fb: FormBuilder) {
    }

    onSortSelect(index: number) {
        this.sortParams.forEach((param, i) => {
            if (i !== index) {
                param.sort_dir = null;
            }
        })
        Object.assign(this.searchParams, this.sortParams[index])
    }

    findPaging(fromPaginator: boolean = false) {
        if (!fromPaginator) {
            this.paginator.start = 1;
        }
        const url = new URLSearchParams();
        const params: { [key: string]: any } = {...this.searchParams, ...this.paginator};
        for (let propName in params) {
            if (params[propName]) {
                url.append(propName, params[propName])
            }
        }
        this.cryptoListing$ = this.service.findCryptoListings(url).pipe(finalize(() => this.filters = {
            name: '',
            symbol: ''
        }))
            .subscribe(res => {
                this.cryptoList = res?.data ?? [];
                this.cryptoList?.forEach((crypto, index) => crypto.index = index);
                this.total = res?.status.total_count ?? 0;
            }, error => {
                this.cryptoList = [];
                this.total = 0;
                alert(error.error?.status?.error_message || 'ERROR')
            })
    }

    notMatch(filterBy: 'name' | 'symbol', dataIndex: number): boolean {
        return Boolean(this.filters[filterBy] && !this.cryptoList[dataIndex][filterBy].toLowerCase().startsWith(this.filters[filterBy].toLowerCase()))
    }

    // sortFn(sort: string, sort_dir: SortDir) {
    //     const data = [...this.cryptoList];
    //     if (!sort_dir) {
    //         data.sort((a, b) => a.index - b.index)
    //     } else if (sort_dir === 'asc') {
    //         data.sort((a, b) => {
    //             if (a.name < b.name) {
    //                 return -1;
    //             }
    //             if (a.name > b.name) {
    //                 return 1;
    //             }
    //             return 0;
    //         })
    //     } else {
    //         data.sort((b, a) => {
    //             if (a.name < b.name) {
    //                 return -1;
    //             }
    //             if (a.name > b.name) {
    //                 return 1;
    //             }
    //             return 0;
    //         })
    //     }
    //     this.cryptoList = data;
    // }

    ngOnDestroy() {
        this.cryptoListing$?.unsubscribe();
    }
}
