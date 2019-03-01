import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../servises/product.service';
import { Product } from '../models/product.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'sn-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  private products: Product[] = [];
  private listener: Subscription;
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.listener = this.productService.getProductUpdateListener().
      subscribe((products: Product[]) => {
        this.products = products;
      });
  }

  ngOnDestroy() {
    this.listener.unsubscribe();
  }

  onSearch(name: HTMLTextAreaElement) {
    this.productService.searchByName(name.value);
    //this.productService.editProduct(this.products[0]._id);
    //this.router.navigate(['/home-page']);
  }
}
