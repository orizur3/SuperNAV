import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/servises/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  user: boolean = false;
  constructor(private router: Router, private userService: UserService) { }


  ngOnInit() {
  
    if (localStorage.getItem('token') != null)
      this.user = true;
  }
  ngSingIn(username, email, password, passwordconf,city) {
    const SignInUser: User = {
      email: email.value,
      username: username.value,
      password: password.value,
      passwordConf: passwordconf.value,
      city: city.value
    };
    this.userService.createNewUser(SignInUser);
  }
  onLogin() {
    this.router.navigate(['/login']);
  }
  onSignIn() {
    this.router.navigate(['/sign']);
  }

  onHome() {
    if (localStorage.getItem('token') != null)
      this.router.navigate(['/signin-homepage']);
    else
      this.router.navigate(['/home-page']);
  }
  onProducts() {
    this.router.navigate(['/app-our-products']);
  }

}
