import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/servises/user.service';

@Component({
  selector: 'sn-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent{
 
  constructor(private userService: UserService) { }

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

 }
