import { Component, OnInit } from '@angular/core';
import {UserService} from './services/user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './beans/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  private user: Observable<User>;

  constructor(private router: Router, public userService: UserService) {
    this.user = null;
  }


logout() {
    this.userService.logout();
  }

ngOnInit(): void {
    // invalidate previous session
    this.logout();
}

}
