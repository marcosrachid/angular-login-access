import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import {
  EventBrokerHelper,
  IEventListener,
  Language 
} from './';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private token: string;
  private language: string;
  private languages: Language[];
  private eventListener: IEventListener;

  constructor(private router: Router, private translate: TranslateService, private eventBroker: EventBrokerHelper) {}

  ngOnInit() {
      this.token = localStorage['access_token'] || '';
      this.eventListener = this.eventBroker.listen<string>('token', (value: string) => {
               this.token = value;
          });
      this.languages = [
        new Language('en_US', 'English'),
        new Language('es', 'Español'),
        new Language('pt_BR', 'Português')
      ];
      this.language = localStorage['language'] || this.languages[0].id;
      this.translate.use(this.language);
  }

  ngOnDestroy() {
      this.eventListener.ignore();
  }

  logout() {
    delete localStorage['access_token'];
    this.token = '';
    this.router.navigate(['/login']);
  }

  compareFn(l1: string, l2: string): boolean {
    return l1 === l2;
  }

  changeLanguage() {
    localStorage['language'] = this.language;
    this.translate.use(this.language);
  }

}
