import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Course} from '../models/course.class';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private APi = 'http://5b90d0643ef10a001445d0ea.mockapi.io/api/course';

  constructor(public http: HttpClient) {
  }

  getListCourse(): Observable<Course[]> {
    return this.http.get<Course[]>(this.APi);
  }

  getCourse(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.APi}/${id}`);
  }

  postCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(this.APi, course);
  }

  deleteCourse(id: number): Observable<Course> {
    return this.http.delete<Course>(`${this.APi}/${id}`);
  }

  updateCourse(course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.APi}/${course.id}`, course);
  }

  handlerErr(err: HttpErrorResponse) {
    if (err.error instanceof Error) {
      console.log(`client error ${err.error.message}`);
    } else {
      console.log(`server err ${err.status}-${err.error}`);
    }
  }
}
