import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HomeComponent} from './component/home/home.component';
import {CoursesComponent} from './component/courses/courses.component';
import {CourseListComponent} from './component/course-list/course-list.component';
import {CourseEditComponent} from './component/course-edit/course-edit.component';
import {CourseAddComponent} from './component/course-add/course-add.component';
import {CourseRoutingModule} from './course-routing.module';
import {ErrValidateComponent} from './component/err-validate/err-validate.component';
import { FomatStringPipe } from './pipes/fomat-string.pipe';
import { FilerArrayPipe } from './pipes/filer-array.pipe';
import { ConverDatePipe } from './pipes/conver-date.pipe';
import {ShareModule} from '../share/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ShareModule,
    CourseRoutingModule,
  ],
  exports: [],
  declarations: [
    HomeComponent,
    CoursesComponent,
    CourseListComponent,
    CourseAddComponent,
    CourseEditComponent,
    ErrValidateComponent,
    FomatStringPipe,
    FilerArrayPipe,
    ConverDatePipe,
  ],
  providers: []
})
export class CourseModule {
}
