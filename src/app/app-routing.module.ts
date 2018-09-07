import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'course',
    loadChildren: './course/course.module#CourseModule'
  },
  {
    path: 'order',
    loadChildren: './orders/orders.module#OrdersModule',
  },
  {
    path: '',
    redirectTo: '/course',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class AppRoutingModule {
}
