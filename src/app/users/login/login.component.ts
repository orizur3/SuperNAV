import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../servises/user.service'
@Component({
  selector: 'sn-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //not fixed function
  onCreateUser(form: NgForm) {
    
  }
}
