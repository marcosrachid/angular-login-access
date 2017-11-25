import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { DTO } from '../_models';

@Injectable()
export class HttpHelper {

  private API_URL: string = 'http://127.0.0.1:7000/site/api/v1/';
  private AUTH_URL: string = 'http://127.0.0.1:7000//site/api/v1/auth/sign_in';

  constructor(private http: Http) {}

  authenticate(body) {
    const headersParams = {
      'Content-Type': 'application/json'
    }
    const headers = new Headers(headersParams);
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.AUTH_URL, body, options)
      .map(this.extractData)
      .catch(this.processErrors);
  }

  call(path: string) {
    const headersParams = {
      'Authorization': localStorage['access_token']
    };
    const headers = new Headers(headersParams);
    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.url(path), options)
      .map(this.extractData)
      .catch(this.processErrors);
  }

  private url(path: string) {
    return this.API_URL + path;
  }

  private extractData(response: Response) {
    const data = response.json();
    return data || {};
  }

  private processErrors(error: Response) {
    return Observable.throw(error);
  }

}
