import {Component, OnInit} from '@angular/core';
import {User} from '../../course/models/user.class';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public err = 0;
  public user: User;

  constructor(private  router: Router) {
  }

  ngOnInit() {
    this.getUser();
  }

  private getUser() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  onLogin(email, pass) {
    if (email === 'admin' && pass === '123456') {
      console.log(email);
      console.log(pass);
      const user: User = new User(email, pass);
      localStorage.setItem('user', JSON.stringify(user));
      this.err = 1;
      this.router.navigateByUrl('course/list');
    } else {
      this.err = -1;
    }
  }
  onLogout() {
    localStorage.removeItem('user');
    this.err = 0;
    this.user = null;
  }
}
