import {Component, OnInit} from '@angular/core';
import {User} from '../../course/models/user.class';
import {Router} from '@angular/router';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public err = 0;
  public user: User;
  public quans: Observable<any[]>;

  constructor(private  router: Router, db: AngularFireDatabase) {
    this.quans = db.list('/quanans').valueChanges();
    console.log(this.quans.subscribe(data => console.log(data)));
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
