import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../servises/product.service';
import { Product } from '../models/product.model';
import { UserService } from '../servises/user.service';
import { User } from '../models/user.model';
import { Subscription } from 'rxjs';
import { GoogleMap, google } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'sn-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  username: string;
  topProducts: Product[] = [];
  private lat: number = 0;
  private long: number = 0;
  private cordinateSub: Subscription;
  private productSub: Subscription;
  ourUsers: User;
  user: boolean = false;
  constructor(private router: Router, private producrService: ProductService, private userService: UserService) {
  }


  ngOnInit() {
    if (localStorage.getItem('token') != null)
      this.user = true;
    this.username = localStorage.getItem('name');
    this.producrService.topSales();
    this.productSub = this.producrService.getProductUpdateListener().subscribe((productData: Product[]) => {
      this.topProducts = productData;
    });
    this.userService.getCordinates(localStorage.getItem('token'));
    setTimeout(() => {
      this.cordinateSub = this.userService.getCordinateUpdateListener().subscribe((productData: number[]) => {
        this.lat = productData[0];
        this.long = productData[1];
      });
    }, 500);
  }
  ngHomeSignIn(username, email, password, passwordconf,city){
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
    this.router.navigate(['/home-page']);
  }
  onPie() {
    this.router.navigate(['/app-pie']);
  }
  onProducts() {
    this.router.navigate(['/app-our-products']);
  }
  onUsers() {
    this.router.navigate(['/app-our-users']);
  }
  onShoppingList() {
    this.router.navigate(['/app-shopping-cart']);
  }
  onSpenderPie() {
    this.router.navigate(['/app-big-spenders']);
  }
  onOrders() {
    this.router.navigate(['/app-orders']);
  }
}
