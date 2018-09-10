import {Component, OnInit} from '@angular/core';
import {CourseService} from '../../services/course.service';
import {Subscription} from 'rxjs';
import {Course} from '../../models/course.class';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
  private subcription: Subscription;
  public course: Course = new Course();
  private id: number;
  public frmEditConetnt: FormGroup;

  constructor(private courseService: CourseService, private activeRoute: ActivatedRoute, private router: Router,
              private formBuider: FormBuilder) {
  }

  ngOnInit() {
    console.log(this.activeRoute.snapshot.params['id']);
    this.id = this.activeRoute.snapshot.params['id'];
    this.courseService.getCourse(this.id).subscribe(data => {
      this.course = data;
    }, err => {
      this.courseService.handlerErr(err);
    });
    this.createForm();
  }

  onEdit() {
    this.subcription = this.courseService.updateCourse(this.course).subscribe(data => {
      this.router.navigateByUrl('course/list');
    }, err => {
      this.courseService.handlerErr(err);
    });
  }
  onBack() {
    // this.router.navigateByUrl('course/list');
  }

  private createForm() {
    this.frmEditConetnt = this.formBuider.group({
      name: ['', [Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)]],
      description: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]],
      price: ['', [
        Validators.required,
        Validators.maxLength(8)
      ]],
    });
  }
}
