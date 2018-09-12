import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';


@Injectable({
  providedIn: 'root'
})
export class LoadingInterceptor implements HttpInterceptor {
  constructor(public spinner: Ng4LoadingSpinnerService) {
  }

  public count = 0;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.count++;
    if (this.count === 1) {
      this.spinner.show();
    }
    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          this.count--;
          if (this.count === 0) {
            this.spinner.hide();
          }
        }
      }, error => {
        this.count--;
        this.spinner.hide();
      })
    )
      ;
  }
}
