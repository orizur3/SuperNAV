import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../servises/user.service';
import { ProductService } from '../servises/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  user: boolean = false;
  token: string;
  constructor(private router: Router, private userService: UserService, private ProductService: ProductService) { }

  ngOnInit() {
    if (localStorage.getItem('token') != null)
      this.user = true;
  }
  onLogin() {
    this.router.navigate(['/login']);
  }
  onSignIn() {
    this.router.navigate(['/sign']);
  }
  onAbout() {
    this.router.navigate(['/about']);
  }
  onHome() {
    if (localStorage.getItem('token') != null)
      this.router.navigate(['/sn-home-page']);
    else
      this.router.navigate(['/home-page']);
  }
  onProducts() {
    this.router.navigate(['/app-our-products']);
  }
  onCreate(name, price, quantity, category) {
    this.token = localStorage.getItem('token');
    this.ProductService.createProduct(this.token, name.value, price.value, quantity.value, category.value);
    this.router.navigate(['/app-our-products']);
  }
}
