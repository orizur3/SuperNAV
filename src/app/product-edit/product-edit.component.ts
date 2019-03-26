import { Component, OnInit } from '@angular/core';
import { ProductService } from '../servises/product.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  private productId: string;
  private productName: string;
  private productPrice: number;
  private productQuantity: number;
  private productCategory: string;
  private token: string;
  constructor(public ProductService: ProductService, private _route: ActivatedRoute) { }

  ngOnInit() {

    this.productId = this._route.snapshot.params['product._id'];
    this.productName = this._route.snapshot.params['product.name'];
    this.productPrice = this._route.snapshot.params['product.price'];
    this.productQuantity = this._route.snapshot.params['product.quantity'];
    this.productCategory = this._route.snapshot.params['product.category'];

  }
  onSave(name, price, quantity, category) {
    this.ProductService.editProduct(this.productId ,name.value, price.value, quantity.value, category.value);
  }
}
