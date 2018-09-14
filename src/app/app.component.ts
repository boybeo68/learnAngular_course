import {Component, VERSION} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = {
    name: 'Tung',
    age: 24
  };
  nameVer = 'Angular';
  version = VERSION.full;

  constructor(private translate: TranslateService, private router: Router) {
    translate.setDefaultLang('en');
    this.routerEvent(this.router);
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  private routerEvent(router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log(event);
      }
    });
  }

}
