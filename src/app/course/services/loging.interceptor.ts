import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {finalize, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LogingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const startDate = Date.now();
    let ok: string;
    console.log(next.handle(req));
    return next.handle(req).pipe(
      tap(event => ok = event instanceof HttpResponse ? 'done' : '', err => ok = `false ${err}`),
      finalize(() => {
      const elapsed = Date.now() - startDate;
      const msg = `${req.method} "${req.urlWithParams}" ${ok} in ${elapsed} ms.`;
      console.log(msg);
    }));
  }
}
