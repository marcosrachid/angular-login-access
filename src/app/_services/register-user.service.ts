import { Injectable } from '@angular/core';

import { HttpHelper } from '../_shared';

@Injectable()
export class RegisterUserService {

  constructor(private httpHelper: HttpHelper) { }

  public register(name: string, user: string, password: string) {
    const body = { fullName: name, email : user, password: password };
    return this.httpHelper.register(body);
  }

}
