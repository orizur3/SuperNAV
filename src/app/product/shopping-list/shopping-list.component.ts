import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../servises/product.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'sn-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  private shoppingProducts: Product[] = [];
  private listener: Subscription;
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.productService.getShoppingList('1');
    this.listener = this.productService.getProductUpdateListener().
      subscribe((products: Product[]) => {
        this.shoppingProducts = products;
      });
  }

  ngOnDestroy() {
    this.listener.unsubscribe();
  }

  returnHomePage() {
    this.router.navigate(['/home-page']);
  }

}
