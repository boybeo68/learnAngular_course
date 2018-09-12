import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CourseInterceptor} from './course/services/course.interceptor';
import {LoadingInterceptor} from './course/services/loading.interceptor';
import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner';
import {LogingInterceptor} from './course/services/loging.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    Ng4LoadingSpinnerModule.forRoot(),
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
