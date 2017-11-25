import { Injectable } from '@angular/core';

import { HttpHelper } from '../_shared';

@Injectable()
export class DashboardService {

  constructor(private httpHelper: HttpHelper) {}

}
