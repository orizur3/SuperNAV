import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../servises/shoppingcart.service';
import { Subscription } from 'rxjs';
import { ShoppingCarts } from '../models/shoppingcart.model';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  private ordersSub: Subscription;
  private orders: ShoppingCarts[] = [];

  constructor(private ShoppingCart: ShoppingCart, private router: Router) { }
  token: string;
  ngOnInit() {
    this.token = localStorage.getItem('token');
    this.ShoppingCart.getOrders(this.token);
    setTimeout(() => {
      this.ordersSub = this.ShoppingCart.getOrdersProductUpdateListener().subscribe((orders: ShoppingCarts[]) => {
        this.orders = orders;
      });
    }, 500)

  }


}
