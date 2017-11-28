import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmptyResponseInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.responseType === 'json') {
      req = req.clone({ responseType: 'text' });

      return next.handle(req).map(response => {
        if (response instanceof HttpResponse) {
          response = response.clone<any>({ body: JSON.parse(response.body) });
        }
        return response;
      });
    }

    return next.handle(req);
  }
}
