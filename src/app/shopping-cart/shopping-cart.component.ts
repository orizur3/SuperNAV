import { Component, OnInit } from '@angular/core';
import { ProductService } from '../servises/product.service';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';
import { Subscription } from 'rxjs';
import { ShoppingCart } from '../servises/shoppingcart.service';
import { ShoppingCarts } from '../models/shoppingcart.model';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  private ourShoppingProducts: Product[] = [];
  private shoppingProductSub: Subscription;
  user: boolean = false;
  name: string;
  token: string;
  price: number;
  quantity: number;
  constructor(private ShoppingCart: ShoppingCart, private producrService: ProductService, private router: Router) { }
  //need to add full price
  ngOnInit() {
    if (localStorage.getItem('token') != null)
      this.user = true;
    this.token = localStorage.getItem('token');
    this.ShoppingCart.getUserShoppingCart(this.token);
    setTimeout(() => {
      this.shoppingProductSub = this.ShoppingCart.getShoppingProductUpdateListener().subscribe((shopping: Product[]) => {
        this.ourShoppingProducts = shopping;
      });
    }, 200); //only with timeout the observer can get the full response.
  }
  onDelete(productId:string) {
    this.token = localStorage.getItem('token');
    this.ShoppingCart.deleteProduct(this.token, productId);
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
  onPayment() {
    this.token = localStorage.getItem('token');
    this.ShoppingCart.payment(this.token);

  }

}
