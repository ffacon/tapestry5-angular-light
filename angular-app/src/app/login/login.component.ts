import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../beans/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string = undefined;
  login: string;
  password: string;
  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  logUser() {
    this.userService.login(this.login, this.password).subscribe
    ( (token) => { this.router.navigate(['/home']); },
      (error) => { this.errorMessage = 'Error' + error; }
    );
  }

}
