import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {CoursesComponent} from './component/courses/courses.component';
import {CourseListComponent} from './component/course-list/course-list.component';
import {CourseEditComponent} from './component/course-edit/course-edit.component';
import {CourseAddComponent} from './component/course-add/course-add.component';

const appRoute: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'counseling',
    component: CoursesComponent,
    children: [{
      path: '',
      component: CourseListComponent,
    },
      {
        path: ':id/edit',
        component: CourseEditComponent
      },
      {
        path: 'add',
        component: CourseAddComponent
      }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoute)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class CourseRoutingModule { }
