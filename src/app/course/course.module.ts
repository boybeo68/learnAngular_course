import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './component/home/home.component';
import {CoursesComponent} from './component/courses/courses.component';
import {CourseListComponent} from './component/course-list/course-list.component';
import {CourseEditComponent} from './component/course-edit/course-edit.component';
import {CourseAddComponent} from './component/course-add/course-add.component';
import {CourseRoutingModule} from './course-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CourseRoutingModule
  ],
  exports: [
  ],
  declarations: [
    HomeComponent,
    CoursesComponent,
    CourseListComponent,
    CourseAddComponent,
    CourseEditComponent,
  ]
})
export class CourseModule {
}
