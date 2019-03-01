import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../servises/product.service';
import { Product } from '../models/product.model';
import { UserService } from '../servises/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'sn-home-page',
  templateUrl: './sign-in-home-page.component.html',
  styleUrls: ['./sign-in-home-page.component.css']
})
export class SignInHomePageComponent implements OnInit {
  topProducts: Product[] = [];
  user: boolean = false;
  token: string;
  username: string;
  constructor(private router: Router, private producrService: ProductService, private userService: UserService) { }



  ngOnInit() {
   
    if (localStorage.getItem('token') != null)
      this.user = true;
    this.username = localStorage.getItem('name');
  }
  onLogin() {
    this.router.navigate(['/login']);
  }
  onSignIn() {
    this.router.navigate(['/sign']);
  }
  onHome() {
    this.router.navigate(['/signin-homepage']);
  }
  onPie() {
    this.router.navigate(['/app-pie']);
  }
  onProducts() {
    this.router.navigate(['/app-our-products']);
  }

}
