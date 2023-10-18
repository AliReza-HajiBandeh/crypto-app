import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders, HttpResponse
} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        'X-CMC_PRO_API_KEY': '8d5aeeed-cb71-4154-854b-0311891aae7f',
        'Accept': 'application/json',
      }
    });
    return next.handle(request);
  }
}
