import { Component } from '@angular/core';
import { ProductService } from '../servises/product.service';

@Component({
  selector: 'sn-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  constructor(private ProductService: ProductService) { }

  onCreate(name, price, quantity, category) {
    this.ProductService.createProduct(name.value, price.value, quantity.value, category.value);
  }
}
