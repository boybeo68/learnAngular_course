import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoadingInterceptor} from './course/services/loading.interceptor';
import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {LogingInterceptor} from './course/services/loging.interceptor';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    Ng4LoadingSpinnerModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [
  //   {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: CourseInterceptor,
  //   multi: true
  // },
    {
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingInterceptor,
    multi: true
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: LogingInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
