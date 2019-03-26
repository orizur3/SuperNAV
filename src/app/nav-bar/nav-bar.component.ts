import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../servises/user.service'

@Component({
  selector: 'sn-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  user: boolean = false;
  private connectSub: Subscription;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.connectSub = this.userService.getUserRoleListener().subscribe((connect: boolean[]) => {
      this.user = connect[0];
    });
  }

  onLogOut() {
    this.userService.logOut();
    this.onHome();
  }

  onLogin() {
    this.router.navigate(['/login']);
  }

  onSignIn() {
    this.router.navigate(['/sign']);
  }

  onHome() {
    this.router.navigate(['/home-page']);
  }

  onProducts() {
    this.router.navigate(['/our-products']);
  }

  //onUsers() {
  //  this.router.navigate(['/our-users']);
  //}

  onShoppingList() {
    this.router.navigate(['/shopping-cart']);
  }

  onOrders() {
    this.router.navigate(['/orders']);
  }
}
