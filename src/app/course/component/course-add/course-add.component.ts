import {Component, OnInit} from '@angular/core';
import {Course} from '../../models/course.class';
import {CourseService} from '../../services/course.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {
  public course: Course = new Course();
  public subcription: Subscription;

  constructor(private Courseservice: CourseService, private router: Router) {
  }
  ngOnInit() {
  }
  onAddContent() {
    this.subcription = this.Courseservice.postCourse(this.course).subscribe(data => {
      this.router.navigateByUrl('course/list');
    }, err => {
      this.Courseservice.handlerErr(err);
    });
  }
}
