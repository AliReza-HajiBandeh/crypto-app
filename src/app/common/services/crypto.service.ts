import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CryptoResponse} from "../types/crypto-listings.types";

@Injectable()
export class CryptoService {

  constructor(private http: HttpClient) { }

  findCryptoListings(urlSearchParams?: URLSearchParams): Observable<CryptoResponse> {
    return this.http.get<CryptoResponse>(`/v1/cryptocurrency/listings/latest?${urlSearchParams?.toString() || ''}`)
  }
}
