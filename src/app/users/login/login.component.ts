import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../servises/user.service'
import { Router } from '@angular/router';
import { User } from '../../models/user.model'
@Component({
  selector: 'sn-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;
  user: boolean = false;
  constructor(private router: Router, private userService: UserService) { }

  ngLogin(username, password) {
    const loginUser: User = {
      email: 'nevermind',
      username: username.value,
      password: password.value,
      passwordConf: 'nevermind',
      city: 'nevermind'
    };
    this.userService.logIn(loginUser);
  }
}
