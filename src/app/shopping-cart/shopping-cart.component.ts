import { Component, OnInit } from '@angular/core';
import { ProductService } from '../servises/product.service';
import { Product } from '../models/product.model';
import { Subscription } from 'rxjs';
import { ShoppingCart } from '../servises/shoppingcart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  private ourShoppingProducts: Product[] = [];
  private shoppingProductSub: Subscription;

  constructor(private ShoppingCart: ShoppingCart, private producrService: ProductService) { }

  //need to add full price
  ngOnInit() {
    this.ShoppingCart.getUserShoppingCart();
      this.shoppingProductSub = this.ShoppingCart.getShoppingProductUpdateListener().subscribe((shopping: Product[]) => {
        this.ourShoppingProducts = shopping;
      }); //only with timeout the observer can get the full response.
  }

  onPayment() {
    this.ShoppingCart.payment();
  }

  onDeleteCart() {
    this.ShoppingCart.deleteCart();
  }

  onDelete(productId: string) {
    this.ShoppingCart.deleteProduct(productId);
  }
}
