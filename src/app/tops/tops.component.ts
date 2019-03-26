import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../servises/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sn-tops',
  templateUrl: './tops.component.html',
  styleUrls: ['./tops.component.css']
})
export class TopsComponent implements OnInit {

  topProducts: Product[] = [];
  private productSub: Subscription;

  constructor(private producrService: ProductService) { }

  ngOnInit() {
    this.producrService.topSales();
    this.productSub = this.producrService.getProductUpdateListener().subscribe((productData: Product[]) => {
      this.topProducts = productData;
    });
  }

}
