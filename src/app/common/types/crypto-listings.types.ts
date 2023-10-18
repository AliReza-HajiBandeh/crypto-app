import {StatusCodes} from "../interceptor/status-codes";

export type Cryptocurrency = {
    index: number
    name: string,
    symbol: string,
    quote: {
        USD: {
            price: number,
            market_cap: number,
            percent_change_24h: number
        }
    }
}

export type CryptoStatus = {
    timestamp: string,
    error_code: StatusCodes | 0,
    error_message: string | null,
    elapsed: number,
    credit_count: number,
    notice: string | null,
    total_count: number
}

export type CryptoResponse = {
    status: CryptoStatus,
    data: Cryptocurrency[]
}

export type SortDir = 'asc' | 'desc' | null;
export type SortItem = {sort: string | null, sort_dir: SortDir}