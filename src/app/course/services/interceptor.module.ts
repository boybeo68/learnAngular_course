import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

export class HTTPRequestInterCeptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const dupReq = req.clone({
      headers: req.headers.set('Access-Control-Allow-Origin', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
    });
    return next.handle(dupReq);
  }
}

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HTTPRequestInterCeptor,
    multi: true
  }],
  declarations: []
})
export class InterceptorModule {
}
