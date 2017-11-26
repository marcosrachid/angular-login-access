import { Injectable } from '@angular/core';

import { Login } from '../_models/login';

import { HttpHelper } from '../_shared';

@Injectable()
export class LoginService {

  constructor(private httpHelper: HttpHelper) {}

  public login(user: string, password: string) {
    const body = { email : user, password: password };
    return this.httpHelper.authenticate(body);
  }

  public logout() {
    delete localStorage['access_token'];
  }

}
