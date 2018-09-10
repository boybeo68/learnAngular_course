import {Component, OnInit} from '@angular/core';
import {Course} from '../../models/course.class';
import {CourseService} from '../../services/course.service';
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {
  public course: Course = new Course();
  public subcription: Subscription;
  public frmCourse: FormGroup;

  constructor(private Courseservice: CourseService, private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
  }

  onResetForm() {
      this.frmCourse.reset();
  }

  private createForm() {
    this.frmCourse = this.formBuilder.group({
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
    // this.frmCourse.valueChanges.subscribe(data => {
    //
    // });
  }

  onSubmitForm() {
    console.log(this.frmCourse);
    this.subcription = this.Courseservice.postCourse(this.course).subscribe(data => {
      this.router.navigateByUrl('course/list');
    }, err => {
      this.Courseservice.handlerErr(err);
    });
  }

  onBack() {
    this.router.navigateByUrl('course/list');
  }
}
