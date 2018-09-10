import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {HomeComponent} from '../../component/home/home.component';

@Injectable({
  providedIn: 'root'
})
export class DeactiveGuard implements CanDeactivate<HomeComponent> {
  canDeactivate(component: HomeComponent): Observable<boolean> | Promise<boolean> | boolean {
    const key = localStorage.getItem('key');
    return !!key;
  }

}
