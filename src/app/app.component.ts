import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { GoogleAnalyticsService } from './google-analytics.service';
declare let ga: Function;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-CRUD-Operations';

  constructor(public router: Router, public googleAnalytics : GoogleAnalyticsService){

    this.router.events.subscribe( event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    })
  }

  onClikLoginURL() {
    this.googleAnalytics.eventEmitter('login','clicked','userLogin', 1);
  }

  onClickRegURL(){
    this.googleAnalytics.eventEmitter('reg', 'clicked', 'userReg', 1);
  }

  onClickAdminURL(){
    this.googleAnalytics.eventEmitter('admin', 'clicked', 'adminLogin', 1);
  }
}
