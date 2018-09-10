import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public err = 0;
  public getKey = '';

  constructor(private router: Router) {
  }

  ngOnInit() {
   this.getKey = localStorage.getItem('key');
  }

  onKeyInput(value) {
    if (value === '123456') {
      localStorage.setItem('key', value);
      this.err = 1;
      this.router.navigateByUrl('login');
    } else {
      this.err = -1;
    }
  }
}
