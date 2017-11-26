import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService, EventBrokerHelper, IEventListener } from './';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private token: string;
  private eventListener: IEventListener;

  constructor(private router: Router, private loginService: LoginService, private eventBroker: EventBrokerHelper) {}

  ngOnInit() {
      this.token = localStorage['access_token'] || '';
      this.eventListener = this.eventBroker.listen<string>('token', (value: string) => {
               this.token = value;
          });
  }

  ngOnDestroy() {
      this.eventListener.ignore();
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

}
