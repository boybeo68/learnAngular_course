import {Component, OnInit, OnDestroy} from '@angular/core';
import {Course} from '../../models/course.class';
import {CourseService} from '../../services/course.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, OnDestroy {
  public courseList: Course[];
  public subcription: Subscription;
  public nameSearch = '';

  constructor(public couseService: CourseService) {
  }

  ngOnInit() {
    this.subcription = this.couseService.getListCourse().subscribe(data => {
      this.courseList = data;
    }, error1 => {
      this.couseService.handlerErr(error1);
    });
  }

  ngOnDestroy() {
    if (this.subcription) {
      this.subcription.unsubscribe();
    }
  }
  deleteCourse(id: number) {
    this.couseService.deleteCourse(id).subscribe(data => {
      console.log(data);
     const index = this.courseList.findIndex(course => {
        return course.id === id;
     });
     this.courseList.splice(index, 1);
    }, err => {
      this.couseService.handlerErr(err);
    });
  }

  onSearch() {

  }
}
