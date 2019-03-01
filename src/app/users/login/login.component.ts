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
  //not fixed function

  ngOnInit() {
   
    if (localStorage.getItem('token') != null)
      this.user = true;
    
  }
  onCreateUser(form: NgForm) {

  }
  ngLogin(username,password,city) {
    const loginUser: User = {
      email: 'nevermind',
      username: username.value,
      password: password.value,
      passwordConf: 'nevermind',
      city: 'nevermind'
    };
    this.userService.LogIn(loginUser);

  }





  onHome() {
    if (localStorage.getItem('token') != null)
      this.router.navigate(['/signin-homepage']);
    else
      this.router.navigate(['/home-page']);
  }
  onLogin() {
    this.router.navigate(['/login']);
  }
  onSignIn() {
    this.router.navigate(['/sign']);
  }
  onProducts() {
    this.router.navigate(['/app-our-products']);
  }
}
