import {Component, OnInit, OnDestroy} from '@angular/core';
import {Course} from '../../models/course.class';
import {CourseService} from '../../services/course.service';
import {Subscription} from 'rxjs';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, OnDestroy {
  public courseList: Course[];
  public subcription: Subscription;
  private subquerySearch: Subscription;
  public nameSearch = '';
  public priceFilter = 'Chose';

  constructor(private couseService: CourseService, private router: Router, public activateRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.subquerySearch = this.activateRoute.queryParams.subscribe(resolve => {
      this.subcription = this.couseService.getListCourse().subscribe(data => {
        const name = resolve.name;
        if (name) {
          this.courseList = data.filter(course => {
            return course.name.toLowerCase().indexOf(name.toLowerCase()) !== -1;
          });
        } else {
          this.courseList = data;
        }

      }, error1 => {
        this.couseService.handlerErr(error1);
      });
    });
  }

  ngOnDestroy() {
    if (this.subquerySearch) {
      this.subquerySearch.unsubscribe();
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
    this.router.navigate(['course/list'], {queryParams: {name: this.nameSearch ? this.nameSearch : ''}});
  }

  oncheckChange() {
    console.log(this.priceFilter);
    if (this.priceFilter === 'increases') {
      this.courseList = this.courseList.sort((a, b) => {
        return (a.fee) - (b.fee);
      });
    } else {
      this.courseList = this.courseList.sort((a, b) => {
        return (b.fee) - (a.fee);
      });
    }
  }
}
