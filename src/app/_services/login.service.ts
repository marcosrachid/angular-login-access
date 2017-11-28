import { Injectable } from '@angular/core';

import { HttpHelper } from '../_shared';

import { Login } from '../_models';

@Injectable()
export class LoginService {

  constructor(private httpHelper: HttpHelper) {}

  public login(user: string, password: string) {
    const body = { email : user, password: password };
    return this.httpHelper.post<Login>('auth/sign_in', body);
  }

}
