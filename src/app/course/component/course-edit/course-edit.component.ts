import {Component, OnInit} from '@angular/core';
import {CourseService} from '../../services/course.service';
import {Subscription} from 'rxjs';
import {Course} from '../../models/course.class';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
  private subcription: Subscription;
  public course: Course = new Course();
  private id: number;

  constructor(private courseService: CourseService, private activeRoute: ActivatedRoute , private router: Router) {}
  ngOnInit() {
    console.log(this.activeRoute.snapshot.params['id']);
    this.id = this.activeRoute.snapshot.params['id'];
    this.courseService.getCourse(this.id).subscribe( data => {
      this.course = data;
    }, err => {
      this.courseService.handlerErr(err);
    });
  }

  onEdit() {
    this.subcription = this.courseService.updateCourse(this.course).subscribe( data => {
      this.router.navigateByUrl('course/counseling');
    }, err => {
      this.courseService.handlerErr(err);
    });
  }
}
