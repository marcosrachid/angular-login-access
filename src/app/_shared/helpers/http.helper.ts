import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { DTO, Login } from '../../_models';

@Injectable()
export class HttpHelper {

  private API_URL = 'http://localhost:7001/site/api/v1/';
  private AUTH_URL = 'http://localhost:7001/site/api/v1/auth/sign_in';
  private SIGNUP_URL = 'http://localhost:7001/site/api/v1/auth/register';

  constructor(private http: HttpClient) {}

  public authenticate(body: any) {
    const headersParams = {
      'Content-Type': 'application/json'
    };
    const headers = new HttpHeaders(headersParams);
    return this.http.post<Login>(this.AUTH_URL, body, { headers: headers });
  }

  public register(body: any) {
    const headersParams = {
      'Content-Type': 'application/json'
    };
    const headers = new HttpHeaders(headersParams);
    return this.http.post<void>(this.SIGNUP_URL, body, { headers: headers });
  }

  public get(path: string) {
    const headersParams = {
      'Content-Type': 'application/json',
      'Authorization': localStorage['access_token'] || ''
    };
    const headers = new HttpHeaders(headersParams);
    return this.http.get<DTO>(this.url(path), { headers: headers });
  }

  public post(path: string, body: any) {
    const headersParams = {
      'Content-Type': 'application/json',
      'Authorization': localStorage['access_token'] || ''
    };
    const headers = new HttpHeaders(headersParams);
    return this.http.post<DTO>(this.url(path), body, { headers: headers });
  }

  public put(path: string, body: any) {
    const headersParams = {
      'Content-Type': 'application/json',
      'Authorization': localStorage['access_token'] || ''
    };
    const headers = new HttpHeaders(headersParams);
    return this.http.put<DTO>(this.url(path), body, { headers: headers });
  }

  public delete(path: string, body: any) {
    const headersParams = {
      'Content-Type': 'application/json',
      'Authorization': localStorage['access_token'] || ''
    };
    const headers = new HttpHeaders(headersParams);
    return this.http.delete<DTO>(this.url(path), { headers: headers });
  }

  private url(path: string) {
    return this.API_URL + path;
  }

}
