import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpHelper {

  private API_URL = 'http://localhost:7001/site/api/v1/';

  constructor(private http: HttpClient) {}

  public get<T>(path: string): Observable<T> {
    const headersParams = {
      'Content-Type': 'application/json'
    };
    const headers = new HttpHeaders(headersParams);
    return this.http.get<T>(this.url(path), { headers: headers });
  }

  public post<T>(path: string, body: any): Observable<T> {
    const headersParams = {
      'Content-Type': 'application/json'
    };
    const headers = new HttpHeaders(headersParams);
    return this.http.post<T>(this.url(path), body, { headers: headers });
  }

  public put<T>(path: string, body: any): Observable<T> {
    const headersParams = {
      'Content-Type': 'application/json'
    };
    const headers = new HttpHeaders(headersParams);
    return this.http.put<T>(this.url(path), body, { headers: headers });
  }

  public delete<T>(path: string, body: any): Observable<T> {
    const headersParams = {
      'Content-Type': 'application/json'
    };
    const headers = new HttpHeaders(headersParams);
    return this.http.delete<T>(this.url(path), { headers: headers });
  }

  private url(path: string) {
    return this.API_URL + path;
  }

}
