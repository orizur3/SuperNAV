import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../servises/shoppingcart.service';
import { Subscription } from 'rxjs';
import { ShoppingCarts } from '../models/shoppingcart.model';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  private ordersSub: Subscription;
  private orders: ShoppingCarts[] = [];
  private panelOpenState = false;

  constructor(private ShoppingCart: ShoppingCart) { }

  ngOnInit() {
    this.ShoppingCart.getOrders(localStorage.getItem('token'));
      this.ordersSub = this.ShoppingCart.getOrdersProductUpdateListener().subscribe((orders: ShoppingCarts[]) => {
        this.orders = orders;
      });
  }
}
